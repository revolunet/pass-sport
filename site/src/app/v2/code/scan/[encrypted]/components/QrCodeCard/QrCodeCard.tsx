'use client';

import cn from 'classnames';
import { QRCodeSVG } from 'qrcode.react';
import styles from './styles.module.scss';
import Button from '@codegouvfr/react-dsfr/Button';
import { push } from '@socialgouv/matomo-next';

interface Props {
  data: {
    firstname: string;
    lastname: string;
    gender: string;
    code: string;
    birthDate: string;
  };
  qrCodeValue: string;
}

const QrCodeCard = ({ data, qrCodeValue }: Props) => {
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
    push(['trackEvent', 'Print Button', 'Clicked', 'QR Recap page']);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <QRCodeSVG
            value={qrCodeValue}
            size={240}
            aria-label="Image de votre QR Code - votre pass Sport, à montrer à un club partenaire lors de votre inscription"
          />
        </div>

        <div>
          <p className={cn('fr-mb-1w', 'fr-h6', styles.fullname)}>
            <span className={styles['text-casing']}>{firstname}</span>{' '}
            <span className={styles['text-casing']}>{lastname}</span>
          </p>

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
          aria-label="Bouton pour imprimer la page contenant le QR Code"
        >
          Imprimer mon pass Sport au format PDF
        </Button>
      </div>
    </div>
  );
};

export default QrCodeCard;
