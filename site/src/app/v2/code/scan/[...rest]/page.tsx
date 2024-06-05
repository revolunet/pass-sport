import { redirect } from 'next/navigation';

interface Props {
  params: {
    rest: string[];
  };
}

export default function Page({ params: { rest } }: Props) {
  const encodedSlash = encodeURIComponent('/');
  const queryParametersWithSlashes = `${rest.join(encodedSlash)}`;
  const queryParametersWithEncodedSlahes = queryParametersWithSlashes.replaceAll('/', encodedSlash);

  redirect(`/v2/code/scan/${queryParametersWithEncodedSlahes}`);
}
