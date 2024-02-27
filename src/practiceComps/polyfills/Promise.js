function SimplePromise(executor) {
    let onResolve, onReject;
    let fulfilled = false;
    let rejected = false;
    let called = false;
    let value;

    const resolve = (val) => {
        if (!called) {
            value = val;
            fulfilled = true;
            called = true;
            if (onResolve) onResolve(val);
        }
    };

    const reject = (reason) => {
        if (!called) {
            value = reason;
            rejected = true;
            called = true;
            if (onReject) onReject(reason);
        }
    };

    this.then = function (callback) {
        onResolve = callback;
        if (fulfilled) callback(value);
        return this;
    };

    this.catch = function (callback) {
        onReject = callback;
        if (rejected) callback(value);
        return this;
    };

    executor(resolve, reject);
}

/**
 * Running the promise
 * const promise = new SimplePromise((resolve, reject) => {
  setTimeout(() => resolve('Success!'), 1000);
});

promise.then(value => {
  console.log(value); // 'Success!' after 1 second
}).catch(error => {
  console.error(error);
});
 */