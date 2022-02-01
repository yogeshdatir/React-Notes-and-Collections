function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

document.body.innerText = add(5)(4)(3)(2)();
