/**
 * Implement normalization process used by Angular - https://docs.angularjs.org/guide/directive#normalization
 *
 * In simple terms, normalization converts a kebab-case string to camelCase string. Denormalization does the opposite.
 *
 * Sanity checks are omitted for brevity
 */

// Capitalize the first letter of a string
const sentenceCase = str => str[0].toUpperCase() + str.substr(1).toLowerCase();

// convert a kebab-case string to camelCase string
const normalize = str =>
  str
    .split('-')
    .filter((substr, index) => index !== 0 || !['x', 'data'].includes(substr)) // strip 'x' and 'data'
    .map(
      (substr, index) =>
        index === 0 ? substr.toLowerCase() : sentenceCase(substr),
    )
    .join('');

/**
 * TESTING
 */

console.log('x-jai-angular ==>', normalize('x-jai-angular'));
console.log('jai-X-angular ==>', normalize('jai-x-angular'));
console.log('data-jai-angular ==>', normalize('data-jai-angular'));
console.log('jai-data-angular ==>', normalize('jai-data-angular'));
console.log('jai-angular ==>', normalize('jai-angular'));
console.log('jai-react-angular ==>', normalize('jai-react-angular'));
