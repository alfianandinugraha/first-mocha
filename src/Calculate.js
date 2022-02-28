class Calculate {
  constructor() {}

  add(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number")
      throw new Error(Calculate.messages.INVALID_TYPES);

    return num1 + num2;
  }

  addBy2(num1) {
    return this.add(num1, 2);
  }

  addCb(num1, num2, cb) {
    if (
      typeof num1 !== "number" ||
      typeof num2 !== "number" ||
      typeof cb !== "function"
    )
      throw new Error(Calculate.messages.INVALID_TYPES);

    cb(num1 + num2);
  }

  static messages = {
    INVALID_TYPES: "Invalid types",
  };
}

export default Calculate;
