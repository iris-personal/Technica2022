var express = require('express');
var router = express.Router();
const profilesCtrl = require('../controllers/profiles');


/* GET profile */
router.get('/home', function(req, res, next){
  res.render('profile/home');
});
router.get('/new', profilesCtrl.new);
router.post('/', profilesCtrl.create);

module.exports = router;