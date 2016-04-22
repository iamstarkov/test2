export default function esDepUnit(input) {
  if (typeof input !== 'string') {
    throw new TypeError(`\input\` should be \`String\`, got \`${typeof input}\``);
  }
  return input;
}
