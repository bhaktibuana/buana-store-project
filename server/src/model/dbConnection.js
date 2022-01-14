const mysql = require("mysql");

const db = mysql.createPool({
  host: "INSER_YOUR_HOST", // "localhost" by default
  user: "INSERT_YOUR_USERNAME", // "root" by default
  password: "INSERT_YOUR_PASSWORD", // "", empty by default
  database: "INSERT_YOUR_DATABASE_NAME",
});

exports.db = db;
