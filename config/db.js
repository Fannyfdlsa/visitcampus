// config/index.js
require('dotenv').config();

module.exports = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST !== 'production' ? 'localhost' : '0.0.0.0',
    dialect: 'mysql',
  },
};
