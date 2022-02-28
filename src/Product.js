import Database from "./Database.js";

class Product {
  /**
   * @type {Database}
   */
  #database;

  constructor(database) {
    this.#database = database;
  }

  getDB() {
    return this.#database.DB();
  }

  find(id) {
    const isConnect = this.#database.isConnect();
    if (!isConnect) throw new Error("Database not connected");

    return {
      id,
      name: "Asus",
    };
  }
}

export default Product;
