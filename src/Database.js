class Database {
  isConnect() {
    return true;
  }

  DB() {
    return "MAIN_BD";
  }

  static messages = {
    NOT_CONNECT: "Database not connected",
  };
}

export default Database;
