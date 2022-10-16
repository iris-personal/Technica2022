var express = require('express');
var router = express.Router();

/* GET profile */
router.get('/', function(req, res, next) {
  res.render('profile');
});
router.post('/', function(req, res, next){
    let profile = new profileModel({
        name: req.body.name,
        age: req.body.age,
        location: req.body.location,
        genderIdentity: req.body.genderIdentity,
        pronouns: req.body.pronouns, 
        hobbies: req.body.hobbies,
        aboutMe: req.body.aboutMe,
    });
    profile.save(function(err,req1){
        if(err) throw err;
        res.render('profile', { title: 'Profile', success:'Profile Updated' });
    });
});

module.exports = router;