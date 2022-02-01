function memoizedFib(n, prevValues = []) {
  if (prevValues[n] != null) {
    return prevValues[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
}

function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.time("1st call");
console.log(memoizedFib(100));
console.timeEnd("1st call");

// console.time("2nd call");
// console.log(fib(10));
// console.timeEnd("2nd call");
