import Product from "../src/Product.js";
import Database from "../src/Database.js";
import { expect } from "chai";
import { mock } from "sinon";

describe("Product.js test", () => {
  /**
   * @type {Product}
   */
  let product;

  /**
   * @type {Database}
   */
  let database;

  beforeEach(() => {
    database = new Database();
    product = new Product(database);
  });

  it("Check database name with mock", () => {
    let databaseMock = mock(database);
    databaseMock.expects("DB").once().returns("TEST_DB");

    expect(product.getDB()).to.be.equal("TEST_DB");
  });

  it("Verify isConnect() called", () => {
    let databaseMock = mock(database);
    let isConnectMock = databaseMock.expects("isConnect").returns(true);

    product.find("84719");

    expect(isConnectMock.calledOnce).to.be.true;
  });
});
