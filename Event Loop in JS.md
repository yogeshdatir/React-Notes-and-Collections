# Event Loop in JS

Event loop basic job is to look both at the stack and the task queue, pushing the first thing on the queue to the stack when it sees the stack as empty.

Example:

```js
console.log('Hi')

setTimeout(function callback() => {
  console.log('callback ran')
}, 5000)

console.log('End of code lines')

// output:
// Hi
// End of code lines
// callback ran
```

