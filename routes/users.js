var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('User');
});

router.get('/profile/success', function(req, res, next) {
  res.send('Profile');
});

router.get('/profile/failure', function(req, res, next) {
  res.sendStatus(401);
});

module.exports = router;
