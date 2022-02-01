const a = {
  count: 5,
  f1: function () {
    console.log("normal", this);
  },
  f2: () => {
    console.log("arrow", this);
  },
  f3: () => {
    console.log("f3", this, this.f2);
  },
};
var f2 = 5;

// a.f1();
// a.f2();
a.f3();
console.log(this.f2);
