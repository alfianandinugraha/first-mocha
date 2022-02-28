class Validator {
  /**
   * @param {string} email
   */
  static isEmail(email) {
    return !!email.match(Validator.regex.email);
  }

  static regex = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/g,
  };

  static messages = {
    INVALID_EMAIL: "Invalid email",
  };
}

export default Validator;
