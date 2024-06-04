import {
  buildConfirmPayload,
  buildConfirmResponseBody,
  buildSearchPayload,
  buildSearchResponseBody,
} from '../../../tests/helpers/builders/confirm-response-body';
import {
  buildLCAConfirmUrl,
  buildLCASearchUrl,
  fetchEligible,
  fetchQrCode,
} from './eligibility-test';
import {
  ConfirmResponseBody,
  ConfirmResponseErrorBody,
  SearchResponseBody,
  SearchResponseErrorBody,
} from '../../../types/EligibilityTest';

global.fetch = jest.fn() as jest.Mock;

jest.mock('./qr-code');

function mockFetch(
  status: number,
  responseBody:
    | ConfirmResponseBody
    | ConfirmResponseErrorBody
    | SearchResponseBody
    | SearchResponseErrorBody,
) {
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(responseBody),
      status,
      ok: status === 200,
    }),
  );
}

describe('eligibility-test service', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockReset();
  });

  describe('buildLCASearchUrl()', () => {
    const apiVersions = [
      { isUsingApiV1: true, segments: '/gw/psp-server/beneficiaires/search' },
      { isUsingApiV1: false, segments: '/apim/api-asso-admin/passsport/beneficiaires/search' },
    ];

    apiVersions.forEach(({ isUsingApiV1, segments }) => {
      it(`builds appropriate query string; using API version ${isUsingApiV1 ? '1' : '2'}`, () => {
        const queryString = buildLCASearchUrl(buildSearchPayload({}), isUsingApiV1).toString();

        const baseUrl = `http://fake-lca-api-url${segments}`;

        expect(queryString).toEqual(
          `${baseUrl}?nom=Marley&prenom=Bob&dateNaissance=2015-03-27&codeInsee=05023`,
        );
      });
    });
  });

  describe('fetchEligible', () => {
    it('should return an error when both remote LCA requests (v1 and v2) is not a 200', async () => {
      const payload = buildSearchPayload({});

      mockFetch(400, { message: 'error' }); // api v1 call
      mockFetch(500, { message: 'error' }); // api v2 call

      try {
        await fetchEligible(payload);
      } catch (error) {
        expect(global.fetch as jest.Mock).toHaveBeenCalledTimes(2);
        expect((error as Error).message).toEqual(
          'Request to LCA api on /search has failed. API V1: Response status is 400; Response body is {"message":"error"}. API V2: Response status is 500; Response body is {"message":"error"}',
        );
      }
    });

    describe('using api v1', () => {
      it('should return an empty array when eligible does not exist', async () => {
        const payload = buildSearchPayload({});

        mockFetch(200, []); // api v1 call
        mockFetch(401, { message: 'error' }); // api v2 call

        const data = await fetchEligible(payload);
        expect(data).toEqual([]);
      });

      it('should return eligible data when eligible exists', async () => {
        const payload = buildSearchPayload({});

        mockFetch(200, buildSearchResponseBody()); // api v1 call
        mockFetch(401, { message: 'error' }); // api v2 call

        const data = await fetchEligible(payload);
        expect(data).toMatchSnapshot();
      });
    });

    describe('using api v2', () => {
      it('should return an empty array when eligible does not exist', async () => {
        const payload = buildSearchPayload({});

        mockFetch(401, { message: 'error' }); // api v1 call
        mockFetch(200, []); // api v2 call

        const data = await fetchEligible(payload);
        expect(data).toEqual([]);
      });

      it('should return eligible data when eligible exists', async () => {
        const payload = buildSearchPayload({});

        mockFetch(401, { message: 'error' }); // api v1 call
        mockFetch(200, buildSearchResponseBody()); // api v2 call

        const data = await fetchEligible(payload);
        expect(data).toMatchSnapshot();
      });
    });
  });

  describe('buildLCAConfirmUrl()', () => {
    const tests = [
      {
        who: 'jeune caf',
        payload: { recipientCafNumber: '1234567' },
        expected: '?id=123456789&situation=jeune&organisme=CAF&matricule=1234567',
      },
      {
        who: 'jeune msa francais',
        payload: {
          recipientLastname: 'fake lastname',
          recipientFirstname: 'fake firstname',
          recipientBirthDate: '01/01/2000',
          recipientBirthPlace: '29260',
          organisme: 'MSA',
        },
        expected:
          '?id=123456789&situation=jeune&organisme=MSA&allocataireName=fake+lastname&allocataireSurname=fake+firstname&codeInseeBirth=29260&allocataireBirthDate=01%2F01%2F2000',
      },
      {
        who: 'jeune msa étranger',
        payload: {
          recipientLastname: 'fake lastname',
          recipientFirstname: 'fake firstname',
          recipientBirthDate: '01/01/2000',
          recipientBirthCountry: 'DZ',
          organisme: 'MSA',
        },
        expected:
          '?id=123456789&situation=jeune&organisme=MSA&allocataireName=fake+lastname&allocataireSurname=fake+firstname&allocataireBirthDate=01%2F01%2F2000&codeIso=DZ',
      },
      {
        who: 'aah caf',
        payload: { recipientCafNumber: '1234567', situation: 'AAH' },
        expected: '?id=123456789&situation=AAH&organisme=CAF&matricule=1234567',
      },
      {
        who: 'aah msa francais',
        payload: {
          situation: 'AAH',
          organisme: 'MSA',
          recipientBirthPlace: '29260',
        },
        expected: '?id=123456789&situation=AAH&organisme=MSA&codeInseeBirth=29260',
      },
      {
        who: 'aah msa etranger',
        payload: {
          situation: 'AAH',
          organisme: 'MSA',
          recipientBirthCountry: 'DZ',
        },
        expected: '?id=123456789&situation=AAH&organisme=MSA&codeIso=DZ',
      },
    ];

    const apiVersions = [
      { isUsingApiV1: true, segments: '/gw/psp-server/beneficiaires/confirm' },
      { isUsingApiV1: false, segments: '/apim/api-asso-admin/passsport/beneficiaires/confirm' },
    ];

    apiVersions.forEach(({ isUsingApiV1, segments }) => {
      it.each(tests)(
        `builds appropriate query string for '$who'; using API version ${isUsingApiV1 ? '1' : '2'}`,
        ({ payload, expected }) => {
          const queryString = buildLCAConfirmUrl(
            buildConfirmPayload(payload),
            isUsingApiV1,
          ).toString();

          const baseUrl = `http://fake-lca-api-url${segments}`;
          expect(queryString).toEqual(`${baseUrl}${expected}`);
        },
      );
    });
  });

  describe('fetchQrCode', () => {
    it('should return an error when both remote LCA requests (v1 and v2) is not a 200', async () => {
      const payload = buildConfirmPayload({});

      mockFetch(400, { message: 'error' }); // api v1 call
      mockFetch(500, { message: 'error' }); // api v2 call

      try {
        await fetchQrCode(payload);
      } catch (error) {
        expect(global.fetch as jest.Mock).toHaveBeenCalledTimes(2);
        expect((error as Error).message).toEqual(
          'Request to LCA api on /confirm has failed. API V1: Response status is 400; Response body is {"message":"error"}. API V2: Response status is 500; Response body is {"message":"error"}',
        );
      }
    });

    describe('using api v1', () => {
      it('should return an empty array when eligible does not exist', async () => {
        const payload = buildConfirmPayload({ recipientCafNumber: '1234567' });

        mockFetch(200, []); // api v1 call
        mockFetch(401, { message: 'error' }); // api v2 call

        const data = await fetchQrCode(payload);
        expect(data).toEqual([]);
      });

      it('should return eligible data enhanced with a qrcode url when eligible exists', async () => {
        const payload = buildConfirmPayload({ recipientCafNumber: '1234567' });

        mockFetch(200, buildConfirmResponseBody({})); // api v1 call
        mockFetch(401, { message: 'error' }); // api v2 call

        const data = await fetchQrCode(payload);
        expect(data).toMatchSnapshot();
      });
    });

    describe('using api v2', () => {
      it('should return an empty array when eligible does not exist', async () => {
        const payload = buildConfirmPayload({ recipientCafNumber: '1234567' });

        mockFetch(400, { message: 'error' }); // api v1 call
        mockFetch(200, []); // api v2 call

        const data = await fetchQrCode(payload);
        expect(data).toEqual([]);
      });

      it('should return eligible data enhanced with a qrcode url when eligible exists', async () => {
        const payload = buildConfirmPayload({ recipientCafNumber: '1234567' });

        mockFetch(400, { message: 'error' }); // api v1 call
        mockFetch(200, buildConfirmResponseBody({})); // api v2 call

        const data = await fetchQrCode(payload);
        expect(data).toMatchSnapshot();
      });
    });
  });
});
