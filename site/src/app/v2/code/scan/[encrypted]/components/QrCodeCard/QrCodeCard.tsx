'use client';

import cn from 'classnames';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles.module.scss';
import Button from '@codegouvfr/react-dsfr/Button';

interface Props {
  data: {
    firstname: string;
    lastname: string;
    gender: string;
    code: string;
    birthDate: string;
  };
  encryptedParams: string;
}

const QrCodeCard = ({ data, encryptedParams }: Props) => {
  const { firstname, lastname, gender, code, birthDate } = data;

  const formatBirthDate = (rawDate: string | undefined, gender: string | undefined) => {
    if (!rawDate) {
      return '';
    }

    let bornAt = gender === 'F' ? 'Née le ' : 'Né le ';

    return `${bornAt} ${rawDate}`;
  };

  const formatPspCode = (rawCode: string) => {
    return `${rawCode.replaceAll('-', ' - ')}`;
  };

  const printQRCode = () => {
    window.print();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <QRCodeSVG value={encryptedParams} size={240} />
        </div>

        <div>
          <h6 className={cn('fr-mb-1w', styles.fullname)}>
            <span className={styles['text-casing']}>{firstname}</span>{' '}
            <span className={styles['text-casing']}>{lastname}</span>
          </h6>

          <p className="fr-mb-2w fr-text--md">{formatBirthDate(birthDate, gender)}</p>
          <p className="fr-text--md fr-text--bold fr-mb-0">Code:</p>
          <p className="fr-text--md fr-text--bold">{formatPspCode(code)}</p>
        </div>
      </div>

      <div className="fr-grid-row fr-grid-row--center fr-mt-3w">
        <Button
          id="print-button"
          size="large"
          onClick={printQRCode}
          title="Bouton pour imprimer la page contenant le QR Code"
        >
          Imprimer mon pass Sport au format PDF
        </Button>
      </div>
    </div>
  );
};

export default QrCodeCard;
