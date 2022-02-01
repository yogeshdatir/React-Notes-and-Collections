// tested and verified
function myMemoize(fn, context) {
  const res = {};
  return function (...args) {
    var argsCache = JSON.stringify(args);
    if (!res[argsCache]) {
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
}

const multiply = (n1, n2) => {
  for (let i = 0; i < 100000000; i++) {}

  return n1 * n2;
};

const memoizedMultiply = myMemoize(multiply);

console.time("1st call");
console.log(memoizedMultiply(9565, 6546));
console.timeEnd("1st call");

console.time("2nd call");
console.log(memoizedMultiply(9565, 6546));
console.timeEnd("2nd call");

console.time("without memo");
console.log(multiply(9565, 6546));
console.timeEnd("without memo");

// Reference: https://www.youtube.com/watch?v=vxggZffOqek&t=373s
