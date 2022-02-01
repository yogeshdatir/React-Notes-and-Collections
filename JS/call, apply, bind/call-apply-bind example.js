let object1 = {
  name: "Yogesh",
  battery: 70,
  chargeBattery: function (newBattery) {
    this.battery = newBattery;
  },
};

let object2 = {
  name: "Varun",
  battery: 30,
};

// call
// console.log("before call", object1, object2);
// object1.chargeBattery.call(object2, 40);
// console.log("after call", object1, object2);

// apply
// console.log("before call", object1, object2);
// object1.chargeBattery.apply(object2, [40]);
// console.log("after apply", object1, object2);

// bind
console.log("before call", object1, object2);
const bindResult = object1.chargeBattery.bind(object2, 40);
console.log("after bind", object1, object2);
bindResult();
console.log("after bound function called", object1, object2);

// Reference : https://www.youtube.com/watch?v=OSjTmET11OQ
