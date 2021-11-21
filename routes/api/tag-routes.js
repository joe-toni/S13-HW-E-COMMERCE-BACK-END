const router = require('express').Router();
const {Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
try
{
  let result = await Tag.findAll({include: [{model: Product, as: "products"}]});
  res.status(200).json(result);
}
catch
{
  res.status(400).json(err);
}

});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try
{
  let result = await Tag.findByPk(req.params.id, {include: [{model: Product, as: "products"}]});
  res.status(200).json(result);
}
catch
{
  res.status(400).json(err);
}

});

router.post('/', async (req, res) => {
try
{
  await Tag.create({tag_name: req.body.tag_name});
  res.status(200).json( await Tag.findOne({where: {tag_name: req.body.tag_name}}));  
} 
catch
{
  res.status(400).json(err);
}
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try
  {
    await Tag.update({tag_name: req.body.tag_name}, {where: {id: req.params.id}})
    res.status(200).json(await Tag.findOne({where: {id: req.params.id}}));
  }
  catch
  {
    res.status(400).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
try
{
  let result = await Tag.destroy({where: {id: req.params.id}});
  res.status(200).json(result);
}
catch
{
  res.status(400).json(err);
}
  // delete on tag by its `id` value
});

module.exports = router;
