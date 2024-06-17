export function escapeSingleQuotes(value: string) {
  return value.replaceAll(`'`, `\\'`);
}

export function unescapeSingleQuotes(value: string) {
  return value.replaceAll(`\\'`, `'`);
}
