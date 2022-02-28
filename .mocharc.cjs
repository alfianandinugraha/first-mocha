const Mocha = require("mocha");

const mocha = new Mocha({
  reporter: "mochawesome",
  reporterOptions: ["reportDir=reports", "reportFilename=index"],
});

module.exports = mocha.options;
