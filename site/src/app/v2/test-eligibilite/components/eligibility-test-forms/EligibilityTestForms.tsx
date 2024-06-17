import { useCallback, useState } from 'react';
import StepOneForm from '../step-one-form/StepOneForm';
import YoungCafForm from '../step-two-forms/YoungCafForm';
import { EnhancedConfirmResponseBody, SearchResponseBody } from 'types/EligibilityTest';
import YoungMsaForm from '../step-two-forms/YoungMsaForm';
import AahCafForm from '../step-two-forms/AahCafForm';
import QrCodeVerdict from '../qrcode-verdict/QrCOdeVerdict';
import AahMsaForm from '../step-two-forms/AahMsaForm';
import FullNegativeVerdictPanel from '@/app/components/verdictPanel/FullNegativeVerdictPanel';
import { push } from '@socialgouv/matomo-next';

const EligibilityTestForms = () => {
  const [eligibilityData, setEligibilityData] = useState<SearchResponseBody | null>(null);
  const [pspCodeData, setpspCodeData] = useState<EnhancedConfirmResponseBody | null>(null);
  const onEligibilitySuccess = useCallback(() => {
    push([
      'trackEvent',
      'Eligibility Test',
      'Eligibility test completed',
      'Eligibility test successful',
    ]);
  }, []);

  const onEligibilityFailure = useCallback(() => {
    push([
      'trackEvent',
      'Eligibility Test',
      'Eligibility test completed',
      'Eligibility test unsuccessful',
    ]);
  }, []);

  return (
    <div>
      <StepOneForm
        onDataReceived={(data: SearchResponseBody) => {
          setEligibilityData(data);
          setpspCodeData(null);
        }}
      />

      {eligibilityData &&
        eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'jeune' &&
        eligibilityData[0].organisme === 'CAF' && (
          <YoungCafForm
            eligibilityDataItem={eligibilityData[0]}
            onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
            onEligibilitySuccess={onEligibilitySuccess}
            onEligibilityFailure={onEligibilityFailure}
          />
        )}

      {eligibilityData &&
        eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'jeune' &&
        eligibilityData[0].organisme === 'MSA' && (
          <YoungMsaForm
            eligibilityDataItem={eligibilityData[0]}
            onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
            onEligibilitySuccess={onEligibilitySuccess}
            onEligibilityFailure={onEligibilityFailure}
          />
        )}

      {eligibilityData &&
        eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'AAH' &&
        eligibilityData[0].organisme === 'CAF' && (
          <AahCafForm
            eligibilityDataItem={eligibilityData[0]}
            onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
            onEligibilitySuccess={onEligibilitySuccess}
            onEligibilityFailure={onEligibilityFailure}
          />
        )}

      {eligibilityData &&
        eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'AAH' &&
        eligibilityData[0].organisme === 'MSA' && (
          <AahMsaForm
            eligibilityDataItem={eligibilityData[0]}
            onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
            onEligibilitySuccess={onEligibilitySuccess}
            onEligibilityFailure={onEligibilityFailure}
          />
        )}

      {((eligibilityData && eligibilityData.length === 0) ||
        (pspCodeData && pspCodeData.length === 0)) && (
        <div className="fr-mt-6w">
          <FullNegativeVerdictPanel isLean />
        </div>
      )}

      {pspCodeData && pspCodeData.length > 0 && (
        <div className="fr-mt-6w">
          <QrCodeVerdict data={pspCodeData[0]} />
        </div>
      )}
    </div>
  );
};

export default EligibilityTestForms;
