var express = require('express');
var router = express.Router();
var dogController = require('../controllers/dogs.js');

router.get('/hello', function(req, res) {
  res.json({message: 'hello 1871 from the router'});
});

router.get('/dogs', dogController.list);
router.post('/dogs', dogController.save);

module.exports = router;
