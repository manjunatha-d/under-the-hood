// Assertion library
const expect = received => ({
  toBe: expected => {
    if (received !== expected) {
      throw new Error(
        `${received} is not equal to the expected value ${expected}`
      );
    }
  },
  toBeTrue: expected => {
    if (received !== expected) {
      throw new Error(`${received} is false`);
    }
  }
  // ...so on
});

// Example:
const sum = (a, b) => a + b;

expect(sum(1, 2)).toBe(3);
