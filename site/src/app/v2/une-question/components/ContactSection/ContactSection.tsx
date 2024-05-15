'use client';

import ContactForm from '@/app/v2/une-question/components/ContactForm/ContactForm';
import { createModal } from '@codegouvfr/react-dsfr/Modal';
import cn from 'classnames';
import styles from '@/app/v2/une-question/styles.module.scss';
import { useIsModalOpen } from '@codegouvfr/react-dsfr/Modal/useIsModalOpen';
import { useState } from 'react';

const contactModal = createModal({
  id: 'contact-modal',
  isOpenedByDefault: false,
});

const ContactSection = () => {
  const [modalIsClosed, setModalIsClosed] = useState(true);

  useIsModalOpen(contactModal, {
    onConceal: () => {
      setModalIsClosed(true);
    },
    onDisclose: () => {
      setModalIsClosed(false);
    },
  });

  return (
    <section className={cn('fr-px-3w', styles.contact)}>
      <contactModal.Component
        title="Formulaire de contact"
        className="fr-mb-0"
        iconId="fr-icon-mail-line"
        size="large"
      >
        {!modalIsClosed && <ContactForm closeFn={contactModal.close} />}
      </contactModal.Component>

      <div className="fr-mb-4w">
        <h3 className="fr-mb-2w">Vous ne trouvez pas de réponse satisfaisante.</h3>
        <p className="fr-mb-2w">
          Contactez-nous directement par e-mail pour que nous puissions trouver une solution.
        </p>
        <button
          className="fr-btn fr-btn--primary fr-btn--icon-left fr-icon-mail-fill"
          onClick={() => contactModal.open()}
        >
          Nous contacter par mail
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
