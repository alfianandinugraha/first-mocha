const Mocha = require("mocha");

const mocha = new Mocha({
  reporter: "mochawesome",
  reporterOptions: ["reportDir=reports"],
});

module.exports = mocha.options;
