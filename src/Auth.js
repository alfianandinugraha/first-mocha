import Database from "./Database.js";

class Auth {
  register(email, password) {
    const isConnect = new Database().isConnect();

    if (!isConnect) throw new Error(Database.messages.NOT_CONNECT);

    return {
      email,
      password,
      message: Auth.messages.REGISTER_SUCCESS,
    };
  }

  static messages = {
    REGISTER_SUCCESS: "Register successfully",
  };
}

export default Auth;
