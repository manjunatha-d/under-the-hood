/**
 * pipe functions from left to right
 */
function pipe(...fns) {
  // sanity check
  if (fns.length < 2) {
    return fns[0];
  }

  // Base case
  if (fns.length === 2) {
    return function(...args) {
      return fns[1](fns[0](...args));
    };
  }

  return pipe(fns[0], pipe(fns));
}

/**
 * Test pipe()
 */

function add(a, b) {
  return a + b;
}

function square(a) {
  return a ** 2;
}

const addNSqr = pipe(
  add,
  square,
);

console.log(addNSqr.toString());
console.log(addNSqr(2, 3)); // logs 25
