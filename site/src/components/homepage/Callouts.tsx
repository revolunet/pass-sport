import { CallOut } from '@codegouvfr/react-dsfr/CallOut';
import { calloutContents } from './callouts.messages';

const Callouts = () => {
  return (
    <div className="fr-container">
      <div className="fr-grid-row fr-grid-row--gutters">
        {calloutContents.map((content) => {
          return (
            <div className="fr-col-12 fr-col-lg-3">
              <CallOut title={content.title}>{content.description} </CallOut>;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Callouts;
