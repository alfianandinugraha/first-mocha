import Auth from "../src/Auth.js";
import Database from "../src/Database.js";
import { stub, spy } from "sinon";
import { expect } from "chai";
import Validator from "../src/Validator.js";

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
    const email = "hello@hello.com";
    const password = "hello";

    const databaseMock = stub(Database.prototype, "isConnect");
    databaseMock.returns(false);

    expect(() => auth.register(email, password)).to.throw(
      Database.messages.NOT_CONNECT
    );

    databaseMock.restore();
  });

  it("Register user with hello.com email", () => {
    const email = "hello.com";
    const password = "hello";

    expect(() => auth.register(email, password)).to.throw(
      Validator.messages.INVALID_EMAIL
    );
  });

  it("Validator.isEmail() called on register()", () => {
    const email = "hello@hello.com";
    const password = "hello";

    const validatorSpy = spy(Validator, "isEmail");
    auth.register(email, password);

    expect(validatorSpy.calledOnce).to.be.true;
  });
});
