var express = require('express');
var router = express.Router();

/* GET ultimo listing. */
router.get('/', function(req, res, next) {
  res.send('en esta apgina se mostrara lo último');
});

module.exports = router;
