import Calculate from "../src/Calculate.js";
import { expect } from "chai";
import { spy } from "sinon";

describe("Calculate.js test", () => {
  /**
   * @type {Calculate}
   */
  let calculate;

  beforeEach(() => {
    calculate = new Calculate();
  });

  it("Calculate 2 + 5 = 7", () => {
    expect(calculate.add(2, 5)).to.be.equal(7);
  });

  it("Calculate 2 + 2 != 5", () => {
    expect(calculate.add(2, 2)).to.not.equal(5);
  });

  it("Calculate 5 with addBy2()", () => {
    expect(calculate.addBy2(5)).to.be.equal(7);
  });

  it("Spy add() on addBy2()", () => {
    const calculateSpy = spy(calculate, "add");

    calculate.addBy2(2);

    expect(calculateSpy.calledOnce).to.be.true;
  });

  it("Spy argument add() in addBy2()", () => {
    const num = 5;
    const calculateSpy = spy(calculate, "add");

    calculate.addBy2(5);

    expect(calculateSpy.calledOnceWith(num, 2)).to.be.true;
  });

  it("Spy callback in addCb()", () => {
    const cbResult = spy();

    calculate.addCb(7, 2, cbResult);

    expect(cbResult.calledOnce).to.be.true;
  });
});
