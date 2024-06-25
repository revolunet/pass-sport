import styles from './styles.module.scss';
import SocialMediaLinks from '../socialMediaLinks/SocialMediaLinks';
import Actions from '../actions/Actions';
import Button, { ButtonProps } from '@codegouvfr/react-dsfr/Button';
import { ReactNode } from 'react';
import cn from 'classnames';
import MissionCards from '../mission-cards/MissionCards';

interface Props {
  title: string;
  buttonProps?: ButtonProps;
  isSuccess: boolean;
  hasSocialLinks?: boolean;
  children: ReactNode;
  isLean?: boolean;
  qrCodeComponent?: ReactNode;
}

const VerdictPanel = ({
  title,
  buttonProps,
  children,
  isSuccess,
  hasSocialLinks = true,
  isLean = false,
  qrCodeComponent,
}: Props) => {
  return (
    <>
      <div
        role="alert"
        className={cn(styles.background, { 'fr-p-2w': !isLean, [`${styles.bordered}`]: !isLean })}
      >
        <div
          className={cn('fr-callout', 'fr-icon-information-line', {
            'fr-callout--green-emeraude': isSuccess,
            'fr-callout--pink-tuile': !isSuccess,
          })}
        >
          <h3 className={cn('fr-callout__title', 'fr-pb-1w')}>{title}</h3>
          <div>{children}</div>

          {buttonProps && <Button {...buttonProps} />}
        </div>

        {qrCodeComponent}

        {hasSocialLinks && <SocialMediaLinks />}
      </div>

      <div className="fr-mb-3w fr-mt-10v">
        <Actions />
      </div>

      <div className={cn(styles.background, { 'fr-p-2w': !isLean })}>
        <MissionCards isUsingSuccessUrls={isSuccess} />
      </div>
    </>
  );
};

export default VerdictPanel;
