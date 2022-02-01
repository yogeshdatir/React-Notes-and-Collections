console.log("a");
setTimeout(() => console.log("set"), 0); // task
Promise.resolve(() => console.log("pro")).then((res) => res()); // micro task - priority task
console.log("b");

// a
// b
// pro
// set

// Reference: https://www.youtube.com/watch?v=vxggZffOqek&t=710s
// https://www.jsv9000.app/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
