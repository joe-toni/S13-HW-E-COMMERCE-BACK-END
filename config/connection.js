//This allow us to bring in the environment variables stored in our .env file
require('dotenv').config();

const Sequelize = require('sequelize');

//This establishes our sequelize with the option to connect to an environment provided by either jawsdb
//(incase the app is deployed to heroku) or to one based on the users input
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
