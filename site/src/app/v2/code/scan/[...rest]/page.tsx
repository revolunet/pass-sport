export default function Page(params: any) {
  // Exemple :
  // Le QRcode ci-dessous contient le lien suivant : https://pass.sports.gouv.fr/v2/code/scan/%2FF%2FUOp7WyCqZMNXwSq0VAcs9gx8qWUmLRjBPAeblcv6ThrX9xoy2IrQT6YY1Q5FcjZUB4woGJmNxZ33ZOQmQhM%2BQeNb7qcuJ8%2Bi2Iyruo3gBs4Z5vFONReg8YLUWh5XX
  // Pourtant, si vous le scannez, vous naviguez vers :
  // https://pass.sports.gouv.fr/v2/code/scan/F/UOp7WyCqZMNXwSq0VAcs9gx8qWUmLRjBPAeblcv6ThrX9xoy2IrQT6YY1Q5FcjZUB4woGJmNxZ33ZOQmQhM+QeNb7qcuJ8+i2Iyruo3gBs4Z5vFONReg8YLUWh5XX
  // et obtenez "code invalide"
  // car "%2FF%2F" est transformé par la lecture en "/F/"

  const encodeSlashes = (input: string) => input.replaceAll('/', encodeURIComponent('/'));
  console.log(JSON.stringify(params));
  return <div>Hello</div>;
}
