const { Pool } = require('pg');
require('dotenv').config();

let dbUrl = '';

if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.plog_developer;
} else if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.plog_test;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.plog_db;
} else {
  // eslint-disable-next-line no-undef
  throw error('There is no database');
}
const options = {
  connectionString: dbUrl,
  rejectUnauthorized: true,
  ssl: true,
};
module.exports = new Pool(options);
