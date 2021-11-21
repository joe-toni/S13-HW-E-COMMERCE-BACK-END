// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

//This model is for the product table in our database provided by our schema and connection.js file. It has 5 attributes, an integer to be used as the primary key,
//a string for the descriptor name, a decimal for the price, an integer for the quatity currently on hand, and an integer which will be the foreign key used to relate this table
// to the category table.
Product.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true,
    },
    product_name:
    {
      type: DataTypes.STRING,
      allowNull: false
    },
    price:
    {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {isDecimal: true}
    },
    stock:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {isNumeric: true}
    },
    category_id: 
    {
      type: DataTypes.INTEGER,
      references:
      {
        model: 'category',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
