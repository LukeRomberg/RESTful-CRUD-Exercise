require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'cartoons'
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
