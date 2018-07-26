/**
 * Rudimentary promise implementation
 */

class BangBang {
  constructor(executor) {
    this.resolve = this.resolve.bind(this);
    this.reject = this.reject.bind(this);

    executor(this.resolve, this.reject);
  }

  resolve(result) {
    this.successHandler(result);
  }

  reject(error) {
    this.errorHandler(error);
  }

  thenDo(successHandler, errorHandler) {
    this.successHandler = successHandler.bind(this);
    this.errorHandler = errorHandler.bind(this);
  }
}

// Test promise
function asyncAdd(a, b) {
  return new BangBang((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve(a + b) : reject('The dead tell no tales');
    }, 500);
  });
}

asyncAdd(2, 3).thenDo(
  res => console.log('All cool, res: ', res),
  error => console.log('Shit just hit the fan, error: ', error),
);
