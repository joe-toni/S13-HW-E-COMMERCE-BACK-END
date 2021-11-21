// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//This index file collects all our established models and creates the associations between them for use by both our server.js and our
//seeds.js files

// Categories have many Products
Category.hasMany(Product, {foreignKey: 'category_id', onDelete: 'SET NULL' , onUpdate:'CASCADE'});
// Products belongsTo Category
Product.belongsTo(Category, {foreignKey: 'category_id'});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: "product_id"});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, as: "products", foreignKey: "tag_id"});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
