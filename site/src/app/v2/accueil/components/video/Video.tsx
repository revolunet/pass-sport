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
          Présentation du dispositif Pass&apos;Sport du ministère des Sports
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
                          Présentation du dispositif Pass&apos;Sport du ministère des Sports
                        </h1>
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing,{' '}
                            <a href="https://www.systeme-de-design.gouv.fr/" target="_blank">
                              link test
                            </a>
                            incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque
                            habitant morbi tristique senectus et. Diam maecenas sed enim ut.
                            Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet
                            luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.{' '}
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
