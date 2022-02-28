class Calculate {
  constructor() {}

  add(num1, num2) {
    return num1 + num2;
  }

  addBy2(num1) {
    return this.add(num1, 2);
  }

  addCb(num1, num2, cb) {
    cb(num1 + num2);
  }
}

export default Calculate;
