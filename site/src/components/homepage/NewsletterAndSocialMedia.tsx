const NewsletterAndSocialMedia = () => {
  return (
    <div className="fr-follow">
      <div className="fr-container">
        <div className="fr-grid-row">
          <div className="fr-col-12 fr-col-md-8">
            <div className="fr-follow__newsletter">
              <div>
                <p className="fr-h5">Abonnez-vous à notre lettre d’information</p>
                <p className="fr-text--sm">
                  Pour ne rien manquer de l&apos;actualité de data.gouv.fr et de l&apos;open data,
                  inscrivez-vous à notre infolettre et suivez nos événements.
                </p>
              </div>
              <div className="fr-btns-group fr-btns-group--inline-md">
                <button className="fr-btn" title="S‘abonner à notre lettre d’information">
                  S&apos;abonner
                </button>
              </div>
            </div>
          </div>
          <div className="fr-col-12 fr-col-md-4">
            <div className="fr-follow__social">
              <p className="fr-h5">
                Suivez-nous
                <br /> sur les réseaux sociaux
              </p>
              <ul className="fr-btns-group">
                <li>
                  <a
                    className="fr-btn--facebook fr-btn"
                    title="Facebook - nouvelle fenêtre"
                    rel="noopener external"
                    href="#"
                    target="_blank"
                  >
                    facebook
                  </a>
                </li>
                <li>
                  <a
                    className="fr-btn--twitter-x fr-btn"
                    title="X - nouvelle fenêtre"
                    rel="noopener external"
                    href="#"
                    target="_blank"
                  >
                    X (anciennement Twitter)
                  </a>
                </li>
                <li>
                  <a
                    className="fr-btn--instagram fr-btn"
                    title="Instagram - nouvelle fenêtre"
                    rel="noopener external"
                    href="#"
                    target="_blank"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    className="fr-btn--linkedin fr-btn"
                    title="Linkedin - nouvelle fenêtre"
                    rel="noopener external"
                    href="#"
                    target="_blank"
                  >
                    linkedin
                  </a>
                </li>
                <li>
                  <a
                    className="fr-btn--youtube fr-btn"
                    title="Youtube - nouvelle fenêtre"
                    rel="noopener external"
                    href="#"
                    target="_blank"
                  >
                    youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterAndSocialMedia;
