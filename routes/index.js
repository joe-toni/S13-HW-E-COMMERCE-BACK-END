//This is the index file used to connect all our existing routers and it uses a catch route to signal an attempt to connect to an 
//incorrect or non existant route
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;