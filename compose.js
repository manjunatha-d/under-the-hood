/**
 * compose functions from right to left
 */
function compose(...fns) {
  // Sanity check
  if (fns.length < 2) {
    return fns[0];
  }

  // Base case
  if (fns.length === 2) {
    return function(...args) {
      return fns[0](fns[1](...args));
    };
  }

  return compose(
    compose(
      fns.splice(-1, 1),
      fns[fns.length - 1],
    ),
  );
}

/**
 * Test compose()
 */

function add(a, b) {
  return a + b;
}

function square(a) {
  return a ** 2;
}

const addNSqr = compose(
  square,
  add,
);

console.log(addNSqr.toString());
console.log(addNSqr(2, 3)); // logs 25
