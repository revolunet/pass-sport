import {
  buildConfirmPayload,
  buildConfirmResponseBody,
} from '../../../tests/helpers/builders/confirm-response-body';
import { buildLCAConfirmUrl, fetchQrCode } from './eligibility-test';
import { ConfirmResponseBody, ConfirmResponseErrorBody } from '../../../types/EligibilityTest';

global.fetch = jest.fn() as jest.Mock;

jest.mock('./qr-code');

function mockFetch(status: number, responseBody: ConfirmResponseBody | ConfirmResponseErrorBody) {
  (global.fetch as jest.Mock).mockImplementationOnce(() =>
    Promise.resolve({
      json: () => Promise.resolve(responseBody),
      status,
      ok: status === 200,
    }),
  );
}

describe('eligibility-test service', () => {
  describe('buildLCAConfirmUrl', () => {
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
    it.each(tests)("builds appropriate query string for '$who'", ({ payload, expected }) => {
      const queryString = buildLCAConfirmUrl(buildConfirmPayload(payload)).toString();

      const baseUrl = 'http://fake-lca-api-url/gw/psp-server/beneficiaires/confirm';
      expect(queryString).toEqual(`${baseUrl}${expected}`);
    });
  });

  describe('fetchQrCode', () => {
    it('should return an error when remote LCA request is not a 200', async () => {
      const payload = buildConfirmPayload({});

      mockFetch(500, { message: 'error' });

      try {
        await fetchQrCode(payload);
      } catch (error) {
        expect((error as Error).message).toEqual(
          'Request to LCA api on /confirm has failed. Response status is 500. Response body is {"message":"error"}',
        );
      }
    });

    it('should return an empty array when eligible does not exist', async () => {
      const payload = buildConfirmPayload({ recipientCafNumber: '1234567' });

      mockFetch(200, []);

      const data = await fetchQrCode(payload);
      expect(data).toEqual([]);
    });

    it('should return eligible data enhanced with a qrcode url when eligible exists', async () => {
      const payload = buildConfirmPayload({ recipientCafNumber: '1234567' });

      mockFetch(200, buildConfirmResponseBody({}));

      const data = await fetchQrCode(payload);
      expect(data).toMatchSnapshot();
    });
  });
});
