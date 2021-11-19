const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//find all categories
 // be sure to include its associated Products
router.get('/', async (req, res) => {
  let result = await Category.findAll({include: Product});
  res.json(result);
 
});

// find one category by its `id` value
 // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try
  {
  let result = await Category.findByPk(req.params.id, {include: Product});
  res.json(result);
  }
  catch
  {
    res.status(400).json(err);
  }
});

 // create a new category
router.post('/', async (req, res) => {  
  try
  {
      await Category.create({categoryName: req.body.categoryName});
      let result = await Category.findOne({where: {categoryName: req.body.categoryName}});
      res.json(result);
  }
  catch
  {
    res.status(400).json(err);
  }

});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try
  {
    await Category.update({categoryName: req.body.categoryName},{where: {id: req.params.id}});
    let result = await Category.findOne({where: {id: req.params.id}});
    res.json(result);
  }
  catch
  {
    res.status(400).json(err);
  }
});
// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try
  {
    await Category.destroy({where:{id: req.params.id}});
    let result = await Category.findAll({include: Product});
    res.json(result);
  }
  catch
  {
    res.status(400).json(err);
  }
  
});

module.exports = router;
