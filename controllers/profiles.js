const User = require('../models/user');
const Profile = require('../models/profile');

module.exports = {
    create,
    new: newProfile,
};

function newProfile(req, res) {
    res.render('profile/new', { title: 'User Profile' });
};

function create(req, res) {
    var profile = new Profile(req.body);
    profile.save(function(err) {
    if (err) console.log(err);
    res.redirect('/profile/home');
    });
};