function f1(a) {
  let b = 2;
  setTimeout(function () {
    console.log("f1", a, b); // 3,2
  }, 1000);
}
// f1(3);

// Here the var is created at function scope (means the for iterations share single copy of i), first for loop runs incrementing the i and then setTimeout callback runs with latest value of i which is 3
function f2() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("f2", i); // 3,3,3
    }, 1000 * i);
  }
}
// f2();

// Here the let variable is created for the block scope of the for loop (means for each for iteration make separate copy of i), hence for each setTimeout the value of i is not same.S
function f3() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log("f3", i); // 0,1,2
    }, 1000 * i);
  }
}
// f3();

function f4() {
  for (var i = 0; i < 3; i++) {
    setTimeout(
      function (x) {
        console.log("f4", x); // 0,1,2
      }.bind(null, i),
      1000 * i
    );
  }
}
f4();
