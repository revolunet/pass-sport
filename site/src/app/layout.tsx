import type { Metadata } from 'next';
import './globals.css';
import { DsfrHead } from '@codegouvfr/react-dsfr/next-appdir/DsfrHead';
import { DsfrProvider } from '@codegouvfr/react-dsfr/next-appdir/DsfrProvider';
import { getHtmlAttributes } from '@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes';
import { StartDsfr } from './StartDsfr';
import { defaultColorScheme } from './defaultColorScheme';
import Link from 'next/link';
import PSFooter from '../../components/PSFooter';

export const metadata: Metadata = {
  title: "Pass'Sport - Accueil",
  description: "Page d'accueil du site pass-sports.gouv.fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //NOTE: The lang parameter is optional and defaults to "fr"
  const lang = 'fr';
  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead Link={Link} />
      </head>
      <body>
        <DsfrProvider lang={lang}>{children}</DsfrProvider>
        <PSFooter></PSFooter>
      </body>
    </html>
  );
}
