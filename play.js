const { connect } = require("./client");
const connection = connect();
console.log("Connecting ...");

module.exports = { connect };
