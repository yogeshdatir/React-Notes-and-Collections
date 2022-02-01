const a = 10;

console.log("we are starting...");
const promiseExample = new Promise((resolve, reject) => {
  if (a > 10) {
    resolve({ greater: true });
  } else if (a < 10) {
    resolve({ greater: false });
  } else reject({ error: true });
});

promiseExample
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

console.log("we are ending...");
