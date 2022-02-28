import Calculate from "../src/Calculate.js";
import { expect } from "chai";

describe("Calculate.js test", () => {
  it("Calculate 2 + 5 = 7", () => {
    const calculate = new Calculate();
    expect(calculate.add(2, 5)).to.be.equal(7);
  });

  it("Calculate 2 + 2 != 5", () => {
    const calculate = new Calculate();
    expect(calculate.add(2, 2)).to.not.equal(5);
  });
});
