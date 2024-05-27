import styles from './styles.module.scss';

const Video = () => {
  return (
    <div>
      <figure role="group" className="fr-my-2w fr-content-media">
        <iframe
          src="https://player.vimeo.com/video/727000609?h=8478bc2ce1&title=0&byline=0&portrait=0"
          className={styles.iframe}
          allow="autoplay; fullscreen; picture-in-picture"
        ></iframe>
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
