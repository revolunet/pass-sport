import pictogramImage from '@codegouvfr/react-dsfr/dsfr/artwork/pictograms/buildings/city-hall.svg';

export interface PresentationTileProps {
  title: string;
  description: string;
  detail: string;
}

const PresentationTile: React.FC<PresentationTileProps> = ({ title, description, detail }) => {
  return (
    <div>
      <div className="fr-tile fr-enlarge-link" id="tile-6609">
        <div className="fr-tile__body">
          <div className="fr-tile__content">
            <h3 className="fr-tile__title">
              <a href="#">{title}</a>
            </h3>
            <p className="fr-tile__desc">{description}</p>
            <p className="fr-tile__detail">{detail}</p>
          </div>
        </div>
        <div className="fr-tile__header">
          <div className="fr-tile__pictogram">
            <svg
              className="fr-artwork"
              aria-hidden="true"
              viewBox="0 0 80 80"
              width="80px"
              height="80px"
            >
              <use
                className="fr-artwork-decorative"
                xlinkHref={`${pictogramImage.src}#artwork-decorative`}
              ></use>
              <use
                className="fr-artwork-minor"
                xlinkHref={`${pictogramImage.src}#artwork-minor`}
              ></use>
              <use
                className="fr-artwork-major"
                xlinkHref={`${pictogramImage.src}#artwork-major`}
              ></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationTile;
