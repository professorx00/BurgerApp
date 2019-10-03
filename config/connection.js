var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize(process.env.JAWSDB_URL);

// Exports the connection for other files to use
module.exports = sequelize;