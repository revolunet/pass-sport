import { redirect } from 'next/navigation';

interface Props {
  params: {
    rest: string[];
  };
}

// tests
// http://localhost:3000/v2/code/scan/SJ3zA524Uth/Fd7ItDUVfgG6Mtu66UIFS8y1qEjGxAKaa73frZtiQ5s5/teekqligKpzEMgx+G5DXaQS6bXYxwPJnKzGn5OCunklRkOBNqE=
// http://localhost:3000/v2/code/scan/mPL4qP/BkF0b4Re62rwXH8Lb5nqxFNsqR60nP2PYVt/FnlC/y9HN8GST/NdaTZmssfpEwiKcuuwhC2QnwYuQvWxNbvPfn/eIr/1Lq2p+5ONOIbP2RxZ+3RnhfgZhEoNh
// http://localhost:3000/v2/code/scan/XAi66EueDgwo6/OMwmPo6TwqIK4RcnA7NA7d0oNgPJbRAtLLiujB3CXRFOd2g3tzYpgZ6VY+FzZBB+iB0tzhA2yT256pQgoPfZv/FeKj5nw=
// http://localhost:3000/v2/code/scan/F/UOp7WyCqZMNXwSq0VAcs9gx8qWUmLRjBPAeblcv6ThrX9xoy2IrQT6YY1Q5FcjZUB4woGJmNxZ33ZOQmQhM+QeNb7qcuJ8+i2Iyruo3gBs4Z5vFONReg8YLUWh5XX
// http://localhost:3000/v2/code/scan/l18aKeUIxhFIPrSyhzzv29BeCMuhVWtD+lHYYJc6lQyRYtPpmhOk/v1DXnQU/ivcn/PM3HBIOWBLgFBBo/HzTcKDQDPHtfqAFz32fW1W+w=
export default function Page({ params: { rest } }: Props) {
  // Example of what rest could have as a value
  // source url: /v2/code/scan/F/<rest-of-encoded-query-parameters>
  // ['F', '<rest-of-encoded-query-parameters>']
  // Cases where we have leading slash
  // Cases where we have slashes within the query parameters
  const encodedSlash = encodeURIComponent('/');
  const queryParametersWithSlashes = `${rest.join(encodedSlash)}`;
  const queryParametersWithEncodedSlahes = queryParametersWithSlashes.replaceAll('/', encodedSlash);

  console.log({ rest, queryParametersWithEncodedSlahes });

  // redirect(`/v2/code/scan/${queryParametersWithEncodedSlahes}`);
  return <pre>{rest}</pre>;
}
