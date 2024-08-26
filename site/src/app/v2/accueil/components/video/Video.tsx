'use client';

import vignetteImage from '@/images/vignette-video-accueil.png';
import Button from '@codegouvfr/react-dsfr/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useAxeptio } from '@/app/hooks/use-axeptio';
import styles from './styles.module.scss';

interface Props {
  videoId: string;
  videoPathUrl: string;
  videoFullUrl: string;
}

const Video = ({ videoId, videoPathUrl, videoFullUrl }: Props) => {
  // useAxeptio({ vimeoURL: `https://player.vimeo.com/video/${videoPathUrl}`, videoId });

  const onConsentClick = () => {
    window.axeptioSDK && window.axeptioSDK.requestConsent('vimeo');
  };

  return (
    <div>
      <figure role="group" className="fr-my-2w fr-content-media">
        <iframe
          id={videoId}
          className={styles.iframe}
          data-requires-vendor-consent="vimeo"
          allow="autoplay; fullscreen; picture-in-picture"
          aria-label="Vidéo de présentation du dispositif pass Sport du ministère des Sports 2024 sur Viméo"
        />
        <div data-hide-on-vendor-consent="vimeo" className={styles.videoContainer}>
          <Image src={vignetteImage} alt="Vidéo Viméo" />
          <Button
            onClick={onConsentClick}
            className={styles.consent}
            aria-label="Autoriser la vidéo viméo"
          >
            Autoriser Viméo
          </Button>
        </div>
        <figcaption className={`fr-content-media__caption ${styles.text}`}>
          Vidéo de présentation du dispositif pass Sport du ministère des Sports
          <a
            className={`fr-link ${styles.text}`}
            href={videoFullUrl}
            aria-label="Ouvrir une nouvelle fenêtre vers la vidéo Viméo"
            target="_blank"
          >
            Voir la vidéo sur Viméo
          </a>
        </figcaption>
        <div className={`fr-transcription ${styles.transcription}`} id="transcription-2160">
          <button
            className="fr-transcription__btn"
            aria-expanded="false"
            aria-controls="fr-transcription-collapse-transcription-2160"
            data-fr-js-collapse-button="true"
          >
            Transcription
          </button>
          <div
            className="fr-collapse"
            id="fr-transcription-collapse-transcription-2160"
            data-fr-js-collapse="true"
          >
            <div className="fr-transcription__footer">
              <div className="fr-transcription__actions-group">
                <button
                  className="fr-btn--fullscreen fr-btn"
                  aria-controls="fr-transcription-modal-transcription-2160"
                  aria-label="Agrandir la transcription"
                  data-fr-opened="false"
                  id="button-2163"
                  data-fr-js-modal-button="true"
                >
                  Agrandir
                </button>
              </div>
            </div>
            <div
              id="fr-transcription-modal-transcription-2160"
              className="fr-modal"
              aria-labelledby="fr-transcription-modal-transcription-2160-title"
              data-fr-js-modal="true"
            >
              <div className="fr-container fr-container--fluid fr-container-md">
                <div className="fr-grid-row fr-grid-row--center">
                  <div className="fr-col-12 fr-col-md-10 fr-col-lg-8">
                    <div className="fr-modal__body" data-fr-js-modal-body="true">
                      <div className="fr-modal__header">
                        <button
                          className="fr-btn--close fr-btn"
                          aria-controls="fr-transcription-modal-transcription-2160"
                          id="button-2164"
                          title="Fermer"
                          data-fr-js-modal-button="true"
                        >
                          Fermer
                        </button>
                      </div>
                      <div className="fr-modal__content">
                        <h1
                          id="fr-transcription-modal-transcription-2160-title"
                          className="fr-modal__title"
                        >
                          Présentation du dispositif pass Sport du ministère des Sports
                        </h1>
                        <div>
                          <p>Tu veux profiter d’une aide de 50 euros grâce au pass Sport ?</p>
                          <p>
                            Pour en profiter, tu n’as rien à faire, juste à attendre de recevoir ton
                            pass Sport par sms ou par mail.
                          </p>
                          <p>
                            Les envois auront lieu entre le 30 mai et le 2 juin et à partir du 30
                            août. Tu pourras aussi faire la demande ou retrouver ton pass Sport sur
                            le site pass.sports.gouv.fr.
                          </p>
                          <p>
                            Ensuite, trouve ton futur club de sport parmi plus de 85 000 structures
                            partenaires !
                          </p>
                          <p>
                            Dépêche toi de profiter d’une aide de 50 euros grâce au pass Sport !
                          </p>
                          <p>
                            Ça concerne plus de 6,5 millions de jeunes de 6 à 30 ans… Alors pourquoi
                            pas toi !
                          </p>
                          <p>
                            Si tu veux plus d’infos, rendez-vous sur{' '}
                            <Link href="https://www.pass.sports.gouv.fr" target="_blank">
                              pass.sports.gouv.fr
                            </Link>{' '}
                            ou sur nos réseaux sociaux !
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Video;
