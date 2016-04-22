export default function esDepUnit(input) {
  if (typeof input !== 'string') {
    return Promise.reject(
      new TypeError(`\input\` should be \`String\`, got \`${typeof input}\``)
    );
  }
  return Promise.resolve(input);
}
