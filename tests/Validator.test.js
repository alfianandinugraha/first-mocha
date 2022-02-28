import { expect } from "chai";
import Validator from "../src/Validator.js";

describe("Validator.js test", () => {
  it("Check hello@hello.com email", () => {
    expect(Validator.isEmail("hello@hello.com")).to.be.true;
  });

  it("Check hello.com email", () => {
    expect(Validator.isEmail("hello.com")).to.be.false;
  });
});
