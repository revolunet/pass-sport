'use client';

import Link from 'next/link';
import styles from './styles.module.scss';
import cn from 'classnames';
import { useUpdateTitleIframe } from '@/app/hooks/accessibility/use-update-title-iframe';
import { useRef } from 'react';

interface Props {
  videoFullUrl: string;
}

const Video = ({ videoFullUrl }: Props) => {
  const title = 'Vidéo de présentation du dispositif pass Sport du ministère des Sports';
  const parentRef = useRef<HTMLDivElement | null>(null);

  useUpdateTitleIframe({
    parentRef,
    title,
    targetSelector: 'iframe',
  });

  return (
    <div ref={parentRef}>
      <figure className="fr-my-2w fr-content-media">
        <div className={cn('vimeo_player', styles['vimeo_player'])} data-videoid="956531127" />
        <figcaption className={`fr-content-media__caption ${styles.text}`}>
          {title}
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
