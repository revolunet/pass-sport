import { useState } from 'react';
import StepOneForm from '../step-one-form/StepOneForm';
import YoungCafForm from '../step-two-forms/YoungCafForm';
import { ConfirmResponseBody, SearchResponseBody } from 'types/EligibilityTest';
import YoungMsaForm from '../step-two-forms/YoungMsaForm';
import AahCafForm from '../step-two-forms/AahCafForm';
import QrCodeVerdict from '../qrcode-verdict/QrCOdeVerdict';
import AahMsaForm from '../step-two-forms/AahMsaForm';

const EligibilityTestForms = () => {
  const [eligibilityData, setEligibilityData] = useState<SearchResponseBody>([]);
  const [pspCodeData, setpspCodeData] = useState<ConfirmResponseBody>([]);

  return (
    <div>
      <StepOneForm
        onDataRecieved={(data: SearchResponseBody) => {
          setEligibilityData(data);
          setpspCodeData([]);
        }}
      />

      {JSON.stringify(eligibilityData)}

      {eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'jeune' &&
        eligibilityData[0].organisme === 'CAF' && (
          <YoungCafForm
            eligibilityDataItem={eligibilityData[0]}
            onDataRecieved={(data: ConfirmResponseBody) => setpspCodeData(data)}
          />
        )}

      {eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'jeune' &&
        eligibilityData[0].organisme === 'MSA' && (
          <YoungMsaForm
            eligibilityDataItem={eligibilityData[0]}
            onDataRecieved={(data: ConfirmResponseBody) => setpspCodeData(data)}
          />
        )}

      {eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'AAH' &&
        eligibilityData[0].organisme === 'CAF' && (
          <AahCafForm
            eligibilityDataItem={eligibilityData[0]}
            onDataRecieved={(data: ConfirmResponseBody) => setpspCodeData(data)}
          />
        )}

      {eligibilityData.length > 0 &&
        eligibilityData[0].situation === 'AAH' &&
        eligibilityData[0].organisme === 'MSA' && (
          <AahMsaForm
            eligibilityDataItem={eligibilityData[0]}
            onDataRecieved={(data: ConfirmResponseBody) => setpspCodeData(data)}
          />
        )}
      {pspCodeData.length > 0 && (
        <div className="fr-mt-6w">
          <QrCodeVerdict data={pspCodeData[0]} />
        </div>
      )}
    </div>
  );
};

export default EligibilityTestForms;
