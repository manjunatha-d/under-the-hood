/**
 * compose functions from right to left
 */

// Recursive solution
function compose(...fns) {
  // Base case
  if (fns.length === 2) {
    return (...args) => fns[0](fns[1](...args));
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

const add = (a, b) => a + b;
const square = a => a * a;

const addNSqr = compose(
  square,
  add,
);

console.log(addNSqr.toString());
console.log(addNSqr(2, 3)); // logs 25
