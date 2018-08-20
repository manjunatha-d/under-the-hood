/**
 * pipe functions from left to right
 */

// Recursive solution
function pipe(...fns) {
  // Base case
  if (fns.length === 2) {
    return (...args) => fns[1](fns[0](...args));
  }

  return pipe(
    fns[0],
    pipe(fns),
  );
}

// Implementation using reduce()
// TODO: FIX THIS INCOMPLETE SOLUTION
function pipe_reduce(...fns) {
  return function(...args) {
    // Initial value of result will be args
    return fns.reduce((result, fn) => fn(result), ...args);

    // Ignore
    // This is an example of why composing non-unary functions is difficult.
    // Here, the first function in `fns` is add, which takes 2 arguments.
    // How do you pass them to the first function? (result should be a primitive, not an array)
  };
}

/**
 * Test pipe()
 */

const add = (a, b) => a + b;
const square = a => a * a;

const addNSqr = pipe(
  add,
  square,
);

console.log(addNSqr.toString());
console.log(addNSqr(2, 3)); // logs 25

// const add_and_square = pipe_reduce(add, square);
// console.log(add_and_square.toString());
// console.log(add_and_square(2, 3));
