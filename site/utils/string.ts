export function escapeSingleQuotes(value: string) {
  return value.replaceAll(`'`, `\\'`);
}

export function unescapeSingleQuotes(value: string) {
  return value.replaceAll(`\\'`, `'`);
}

export function fromBase64ToString(base64: string): string {
  return Buffer.from(base64, 'base64').toString('utf-8');
}
