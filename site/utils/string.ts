export function escapeSingleQuotes(value: string) {
  return value.replaceAll(`'`, `\\'`);
}
