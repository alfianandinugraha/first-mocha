import Auth from "../src/Auth.js";
import Database from "../src/Database.js";
import { stub } from "sinon";
import { expect } from "chai";

describe("Auth.js test", () => {
  /**
   * @type {Auth}
   */
  let auth;

  beforeEach(() => {
    auth = new Auth();
  });

  it("Register user", () => {
    const email = "hello@hello.com";
    const password = "hello";

    expect(auth.register(email, password)).to.be.deep.equal({
      email,
      password,
      message: Auth.messages.REGISTER_SUCCESS,
    });
  });

  it("Throw error on register() if database not connected", () => {
    const databaseMock = stub(Database.prototype, "isConnect");
    databaseMock.returns(false);

    expect(() => auth.register()).to.throw(Database.messages.NOT_CONNECT);
  });
});
