import styles from './styles.module.scss';
import rootStyles from '../../styles.module.scss';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import Actions from '../actions/Actions';
import { CallOut } from '@codegouvfr/react-dsfr/CallOut';
import { ButtonProps } from '@codegouvfr/react-dsfr/Button';
import { ReactNode } from 'react';

interface Props {
  title: string;
  buttonProps?: ButtonProps;
  isSuccess: boolean;
  hasSocialLinks?: boolean;
  children: ReactNode;
}

const VerdictPanel = ({
  title,
  buttonProps,
  children,
  isSuccess,
  hasSocialLinks = true,
}: Props) => {
  return (
    <div>
      <div className={styles.container}>
        <CallOut
          title={title}
          colorVariant={isSuccess ? 'green-emeraude' : 'pink-tuile'}
          classes={{
            title: styles['callout-title'],
            text: rootStyles['text--medium'],
          }}
          iconId="fr-icon-info-line"
          {...(buttonProps && { buttonProps })}
        >
          {children}
        </CallOut>
        {hasSocialLinks && <SocialMediaLinks />}
      </div>

      <Actions isSuccess={isSuccess} />
    </div>
  );
};

export default VerdictPanel;
