const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

//This is the model for the product_tag table and it is an intermidiary table that will be used to relate many products to many tags. Each instance represents a unique association
// between any product and any tag based on two foriegn keys one referenceing the primary key of a product instance and one referencing the primary key of a tag. It also has a primary
// integer key that auto increments.

ProductTag.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement: true,
    },
    product_id:
    {
      type: DataTypes.INTEGER,
      references:
      {
        model: 'product',
        key: 'id'
      }
    },
    tag_id:
    {
      type: DataTypes.INTEGER,
      references:
      {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
