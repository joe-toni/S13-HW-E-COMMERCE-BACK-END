const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//find all categories
 // be sure to include its associated Products
router.get('/', async (req, res) => {
  try
  {
   let result = await Category.findAll({include: Product});
    res.status(200).json(result);
  }
  catch (err)
  {
    res.status(400).json(err);
  }

 
});

// find one category by its `id` value
 // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try
  {
    let result = await Category.findByPk(req.params.id, {include: Product});
    if (result === null)
    {
      let err = {status: 404, message: 'Invalid Category ID'};
      throw err;
    }
    else
      {res.status(200).json(result);}
  }
  catch (err)
  {
    res.status(err.status).json(err.message);
  }
});

 // create a new category
router.post('/', async (req, res) => {  
  try
  {
    let check = await Category.findOne({where: {category_name: req.body.category_name}});
    if(check === null)
    {
      await Category.create({category_name: req.body.category_name});
      let result = await Category.findOne({where: {category_name: req.body.category_name}});
      res.status(200).json(result);
    }
    else
    {
      let err = {status: 403, message: 'This category already exists'};
      throw err;
    }
  }
  catch (err)
  {
    res.status(err.status).json(err.message);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try
  {
    await Category.update({category_name: req.body.category_name},{where: {id: req.params.id}});
    let result = await Category.findOne({where: {id: req.params.id}});
    if (result === null)
    {
      let err = {status: 404, message: 'Invalid Category ID'};
      throw err;
    }
    else
    { res.status(200).json(result);}
  }
  catch(err)
  {
    res.status(err.status).json(err.message);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res, ) => {
  try
  {
    let result = await Category.destroy({where:{id: req.params.id}});
     if (result === 0)
      {throw 'Invalid category ID'}
    else
      { res.status(200).json(result);}
  }
  catch (err)
  {
    res.status(404).json(err);
  }
});

module.exports = router;
