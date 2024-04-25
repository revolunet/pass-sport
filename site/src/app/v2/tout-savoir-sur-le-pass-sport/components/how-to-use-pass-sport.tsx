'use client';

import Button from '@codegouvfr/react-dsfr/Button';
import Card from '@codegouvfr/react-dsfr/Card';
import { useRouter } from 'next/navigation';
import styles from '../styles.module.scss';
import qrCodeImage from '../../../../../public/images/tout-savoir-sur-le-pass-sport/qr-code.svg';

export default function HowToUsePassSport() {
  const router = useRouter();

  return (
    <section>
      <h4>Comment utiliser son pass Sport ?</h4>

      <p>
        Pour utiliser son pass Sport, il suffit de présenter son QR code ou code Alphanumérique à
        son club ou sa salle de sport au moment de votre inscription.
        <br />
        Celui-ci déduira automatiquement 50 euros du prix de la licence ou de l&apos;abonnement.
        <br />
        <br />
        Voici à quoi ressemble votre pass Sport que vous avez reçu par e-mail et / ou sms :
      </p>

      <div className={styles['qr-container']}>
        <Card
          background
          title="Nicolas Dupont"
          horizontal
          imageAlt="Image du QR code"
          desc={
            <span>
              Né le 10/01/2015
              <br />
              Code: 24 - AAAA - AAAA
            </span>
          }
          imageUrl={qrCodeImage.src}
          detail={
            <span>
              <span className="fr-icon-arrow-right-line fr-icon--sm fr-mr-1w" />
              Chèque pass Sport
            </span>
          }
          classes={{
            root: styles['qr-root'],
            title: styles['qr-root__title'],
            header: styles['qr-root__header'],
          }}
        />
      </div>

      <Button priority="secondary" onClick={() => router.push('une-question', { scroll: true })}>
        Une question ?
      </Button>
    </section>
  );
}
