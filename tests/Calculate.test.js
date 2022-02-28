import Calculate from "../src/Calculate.js";
import { expect } from "chai";
import { spy } from "sinon";

describe("Calculate.js test", () => {
  it("Calculate 2 + 5 = 7", () => {
    const calculate = new Calculate();
    expect(calculate.add(2, 5)).to.be.equal(7);
  });

  it("Calculate 2 + 2 != 5", () => {
    const calculate = new Calculate();
    expect(calculate.add(2, 2)).to.not.equal(5);
  });

  it("Calculate 5 with addBy2()", () => {
    const calculate = new Calculate();
    expect(calculate.addBy2(5)).to.be.equal(7);
  });

  it("Spy add() on addBy2()", () => {
    const calculate = new Calculate();
    const calculateSpy = spy(calculate, "add");

    calculate.addBy2(2);

    expect(calculateSpy.calledOnce).to.be.true;
  });

  it("Spy argument add() in addBy2()", () => {
    const calculate = new Calculate();
    const num = 5;
    const calculateSpy = spy(calculate, "add");

    calculate.addBy2(5);

    expect(calculateSpy.calledOnceWith(num, 2)).to.be.true;
  });
});
