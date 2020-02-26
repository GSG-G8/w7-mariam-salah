const { Pool } = require('pg');
require('dotenv')('config.env');

let dbUrl = '';
if (process.env.NODE_ENV === 'development') {
  dbUrl = 'plog_developer';
} else if (process.env.NODE_ENV === 'test') {
  dbUrl = 'plog_test';
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = 'plog_db';
} else {
  // eslint-disable-next-line no-undef
  throw error('There is no database');
}
const options = {
  connectionString: dbUrl,
  ssl: true,
};
module.exports = new Pool(options);
