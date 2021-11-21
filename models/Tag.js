const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

//This is the model for the tag table and it has two attributes, an integer primary key and a string to serve as the descriptor name.

Tag.init(
  {
    // define columns
    id:
    {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true,
    },
    tag_name:
    {
      type: DataTypes.STRING
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
