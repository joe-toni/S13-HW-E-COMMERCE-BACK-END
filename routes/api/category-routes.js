const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//This route displays all existing category instances and related products from our category model
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

//This route displays one instance from our category model based on the passed in id and finds out if the user
//has given an incorrect id by checking if the value returned by the query to the model is null
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

 // This route creates a new instance in our category model but only if the name value passed in by the user
 //does not already match an existing category.
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

// This route updates the name on an existing instance in our category model but only if the user has provided a valid id for the 
//the update
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

// This route deletes an existing instance but only if the id passed in actually corresponds to one that  exists
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
