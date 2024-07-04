import './globals.scss';
import { DsfrHead } from '@codegouvfr/react-dsfr/next-appdir/DsfrHead';
import { DsfrProvider } from '@codegouvfr/react-dsfr/next-appdir/DsfrProvider';
import { getHtmlAttributes } from '@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes';
import { StartDsfr } from './StartDsfr';
import { defaultColorScheme } from './defaultColorScheme';
import Link from 'next/link';

import React from 'react';
import PassSportFooter from './components/pass-sport-footer/PassSportFooter';
import PassSportNavigation from './components/pass-sport-navigation/PassSportNavigation';
import PassSportBreadcrumb from '@/app/components/pass-sport-breadcrumb/PassSportBreadCrumb';
import Matomo from './Matomo';
import SkipLinksWrapper from '@/app/components/skip-links-wrapper/SkipLinksWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accueil - pass Sport',
  description: "Page d'accueil du site pass.sports.gouv.fr pour les particuliers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE: The lang parameter is optional and defaults to "fr"
  const lang = 'fr';

  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <Matomo />
      </head>

      <body>
        <SkipLinksWrapper />
        <PassSportNavigation />
        <PassSportBreadcrumb />

        <DsfrProvider lang={lang}>{children}</DsfrProvider>
        <PassSportFooter />
      </body>
    </html>
  );
}
