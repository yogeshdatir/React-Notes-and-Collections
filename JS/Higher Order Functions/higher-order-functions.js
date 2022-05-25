const arr = [5, 2, 3, 6, 4, 2, 9];

arr.sort();
arr.reverse();

console.log(arr);

const objArr = [
  { a: "first" },
  { a: "third" },
  { a: "second" },
  { a: "fourth" },
];
objArr.sort((firstElement, secondElement) => {
  if (firstElement.a > secondElement.a) return 1;
  if (firstElement.a < secondElement.a) return -1;
  return 0;
});

console.log(objArr);

const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
