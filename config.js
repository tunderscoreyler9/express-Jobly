// "use strict";

// /** Shared config for application; can be required many places. */

// require("dotenv").config();
// require("colors");

// const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

// const PORT = +process.env.PORT || 3001;

// // Use dev database, testing database, or via env var, production database
// function getDatabaseUri() {
//   return (process.env.NODE_ENV === "test")
//       ? "jobly_test"
//       : process.env.DATABASE_URL || "jobly";
// }

// // Speed up bcrypt during tests, since the algorithm safety isn't being tested
// //
// // WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
// const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

// console.log("Jobly Config:".green);
// console.log("SECRET_KEY:".yellow, SECRET_KEY);
// console.log("PORT:".yellow, PORT.toString());
// console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
// console.log("Database:".yellow, getDatabaseUri());
// console.log("---");

// module.exports = {
//   SECRET_KEY,
//   PORT,
//   BCRYPT_WORK_FACTOR,
//   getDatabaseUri,
// };
const dotenv = require('dotenv');

dotenv.config();
require("colors");

const NODE_ENV = process.env.NODE_ENV || 'development';

let DB_URI, SECRET_KEY, BCRYPT_WORK_FACTOR;

if (NODE_ENV === 'test') {
  DB_URI = "postgresql:///messagely_test";
} else {
  DB_URI = process.env.DATABASE_URL || "postgresql:///messagely";
}

SECRET_KEY = process.env.SECRET_KEY;
BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;
const PORT = process.env.PORT || 5432;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
  PORT
};