const { Pool } = require('pg');
require('dotenv').config();

let dbUrl = '';
if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.plog_test;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.DATABASE_URL;
} else {
  dbUrl = process.env.plog_developer;
}

const options = {
  connectionString: dbUrl,
  rejectUnauthorized: true,
  ssl: true,
};
module.exports = new Pool(options);
