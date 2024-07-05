// "use strict";

// /** Database setup for jobly. */

// const { Client } = require("pg");
// const { getDatabaseUri } = require("./config");

// const db = new Client({
//   connectionString: getDatabaseUri(),
// });

// db.connect();

// module.exports = db;
const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client({
  connectionString: DB_URI,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  }
}

connectToDatabase();

module.exports = client;