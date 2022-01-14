const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1pV7DJcm2W",
  database: "buana_store_db",
});

exports.db = db;
