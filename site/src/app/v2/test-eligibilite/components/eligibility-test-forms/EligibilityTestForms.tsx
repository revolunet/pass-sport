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

  const onEligibilityFailure = useCallback((name = 'final step') => {
    push([
      'trackEvent',
      'Eligibility Test',
      'Eligibility test completed',
      `Eligibility test unsuccessful - ${name}`,
    ]);
  }, []);

  return (
    <>
      <fieldset id="second-step-form" className="fr-fieldset">
        <StepOneForm
          onDataReceived={(data: SearchResponseBody) => {
            setEligibilityData(data);
            setpspCodeData(null);
          }}
          onEligibilityFailure={() => onEligibilityFailure('first step')}
        />
      </fieldset>

      {eligibilityData && eligibilityData.length > 0 && (
        <fieldset id="third-step-form" className="fr-fieldset">
          {eligibilityData[0].situation.toLowerCase() === 'jeune' &&
            eligibilityData[0].organisme === 'CAF' && (
              <YoungCafForm
                eligibilityDataItem={eligibilityData[0]}
                onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
                onEligibilitySuccess={onEligibilitySuccess}
                onEligibilityFailure={onEligibilityFailure}
              />
            )}

          {eligibilityData[0].situation.toLowerCase() === 'jeune' &&
            eligibilityData[0].organisme === 'MSA' && (
              <YoungMsaForm
                eligibilityDataItem={eligibilityData[0]}
                onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
                onEligibilitySuccess={onEligibilitySuccess}
                onEligibilityFailure={onEligibilityFailure}
              />
            )}

          {eligibilityData[0].situation === 'AAH' && eligibilityData[0].organisme === 'CAF' && (
            <AahCafForm
              eligibilityDataItem={eligibilityData[0]}
              onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
              onEligibilitySuccess={onEligibilitySuccess}
              onEligibilityFailure={onEligibilityFailure}
            />
          )}

          {eligibilityData[0].situation === 'AAH' && eligibilityData[0].organisme === 'MSA' && (
            <AahMsaForm
              eligibilityDataItem={eligibilityData[0]}
              onDataReceived={(data: EnhancedConfirmResponseBody) => setpspCodeData(data)}
              onEligibilitySuccess={onEligibilitySuccess}
              onEligibilityFailure={onEligibilityFailure}
            />
          )}
        </fieldset>
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
    </>
  );
};

export default EligibilityTestForms;
