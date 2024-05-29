import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'pass Sport',
    short_name: 'pass Sport',
    description:
      'Avec le pass Sport, bénéficiez d’une déduction de 50€ pour vous inscrire dans un club sportif éligible à la rentrée !',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
