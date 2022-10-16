var express = require('express');
var router = express.Router();

/* GET profile */
router.get('/', function(req, res, next) {
  res.render('profile');
});
router.post('/', function(req, res, next){
    let profile = new Profile({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        genderIdentity: req.body.genderIdentity,
        pronouns: req.body.pronouns, 
        hobbies: req.body.hobbies,
        aboutMe: req.body.aboutMe,
    });
    profile.save();
    res.redirect('/profile');
});

module.exports = router;