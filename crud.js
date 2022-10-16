const Profile = require('./model');

module.exports = {
    createProfile,
};

function createProfile(req,res){
    let profile = new Profile(req.body);
    profile.save(function(err) {
        if (err) return res.redirect('/profile');
        res.redirect('/profile');
      });
    console.log(req.body);
}