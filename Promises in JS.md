# Promises in JS

The **`Promise`** object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A *promise* is a special JavaScript object that links the “producing code” and the “consuming code” together. 

The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready.

The constructor syntax for a promise object is:

```javascript
let promise = new Promise(function(resolve, reject) {
  	// executor (the producing code)
    // do something
    const result = 'some result'
  	if(success) {
        resolve(result)
    } else {
        reject(new Error('error'))
    }
});
```

Its arguments `resolve` and `reject` are callbacks provided by JavaScript itself. Our code is only inside the executor.

When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- `resolve(value)` — if the job is finished successfully, with result `value`.
- `reject(error)` — if an error has occurred, `error` is the error object.

So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls `resolve` if it was successful or `reject` if there was an error.

The `promise` object returned by the `new Promise` constructor has these internal properties:

- `state` — initially `"pending"`, then changes to either `"fulfilled"` when `resolve` is called or `"rejected"` when `reject` is called.

  A `Promise` is in one of these states:

  - *pending*: initial state, neither fulfilled nor rejected.
  - *fulfilled*: meaning that the operation was completed successfully.
  - *rejected*: meaning that the operation failed.

  

- `result` — initially `undefined`, then changes to `value` when `resolve(value)` called or `error` when `reject(error)` is called.



