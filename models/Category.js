const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}
//This is the model created for our category table for the database provided by our connection
//file and sql schema. This model contains two attributes one for an integer id to be used as the primary key
// and on for a string meant to hold the decriptor name for the category.
Category.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true,
    },
    category_name:
    {
      type: DataTypes.STRING,
      allowNull:false,
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    modelName: 'category',
  }
);

module.exports = Category;
