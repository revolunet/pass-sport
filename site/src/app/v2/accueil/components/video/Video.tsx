'use client';

import { useEffect } from 'react';
import styles from './styles.module.scss';
import Button from '@codegouvfr/react-dsfr/Button';

const Video = () => {
  useEffect(() => {
    const initAxeptio = (): void => {
      if (!window.axeptioSettings) {
        // Définition des paramètres de configuration pour Axeptio
        window.axeptioSettings = {
          clientId: '6662b7369f1ba1b27006fc0a',
          cookiesVersion: 'pass sport-fr-EU',
        };

        // Chargement asynchrone du script Axeptio
        (function (d: Document, s: string) {
          const t = d.getElementsByTagName(s)[0];
          const e = d.createElement(s);
          e.async = true;
          e.src = '//static.axept.io/sdk-slim.js';
          if (t.parentNode) {
            t.parentNode.insertBefore(e, t);
          }
        })(document, 'script');
      }

      if (!window._axcb) {
        window._axcb = [];
      }

      window._axcb.push(function (sdk) {
        sdk.on('cookies:complete', function (choices) {
          document.querySelectorAll('[data-hide-on-vendor-consent]').forEach((el) => {
            const vendor = el.getAttribute('data-hide-on-vendor-consent');
            el.style.display = choices[vendor] ? 'none' : 'inherit';
          });
          document.querySelectorAll('[data-requires-vendor-consent]').forEach((el) => {
            const vendor = el.getAttribute('data-requires-vendor-consent');
            if (choices[vendor]) {
              el.setAttribute('src', el.getAttribute('data-src'));
            }
          });
        });
      });
    };
    initAxeptio();
  });

  const onConsentClick = () => {
    window.axeptioSDK.requestConsent('Vimeo');
  };

  return (
    <div>
      <figure role="group" className="fr-my-2w fr-content-media">
        <iframe
          // </figure>src="https://player.vimeo.com/video/727000609?h=8478bc2ce1&title=0&byline=0&portrait=0"
          className={styles.iframe}
          data-requires-vendor-consent="vimeo"
          data-src="https://player.vimeo.com/video/727000609?h=8478bc2ce1&title=0&byline=0&portrait=0"
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
        <div data-hide-on-vendor-consent="Vimeo">
          <Button onClick={onConsentClick}>Accept Vimeo cookie</Button>
        </div>
        <figcaption className={`fr-content-media__caption ${styles.text}`}>
          Présentation du dispositif pass Sport du ministère des Sports
          <a className={`fr-link ${styles.text}`} href="https://vimeo.com/727000609">
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
                          <p>pass Sport C’est quoi ?</p>
                          <p>
                            Tu as entre 6 et 17 ans révolus ? Et tu bénéficies déjà de l’Allocation
                            de rentrée scolaire (ARS)?
                          </p>
                          <p>
                            Tu as entre 6 et 19 ans révolus ? Et tu bénéficies déjà l’Allocation
                            d’éducation de l’enfant handicapé (AEEH) ?
                          </p>
                          <p>
                            Tu as entre 6 et 30 ans et tu bénéficies déjà de l’Allocation aux
                            adultes handicapés (AAH) ?
                          </p>
                          <p>
                            Tu as jusqu’à 28 ans révolus et tu bénéficies d’une bourse sur critères
                            sociaux de l’enseignement supérieur ?
                          </p>
                          <p>
                            Alors tu recevras fin août un mail avec un code personnel t’informant
                            que tu peux bénéficier du pass Sport.
                          </p>
                          <p>
                            Présente-toi avec ton code personnel pass Sport dans le club sportif de
                            ton choix
                          </p>
                          <p>50 euros seront déduits de ton inscription pour la saison 2023/2024</p>
                          <p>
                            Ce coup de pouce du gouvernement va bénéficier à plus de 6 millions de
                            jeunes comme toi
                          </p>
                          <p>pass Sport Faites entrer le sport dans votre vie</p>
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
