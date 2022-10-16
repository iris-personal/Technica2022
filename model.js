const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();
require('./config/database');

const userSchema = new mongoose.Schema ({
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  }, {
    timestamps: true
});

const profileSchema = new Schema ({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    picture: String,
    age: Number,
    location: String,
    genderIdentity: {
        type: String,
        enum: ['Female', 'Male', 'Trans Masc', 'Trans Femme', 'Non-Binary', 'Prefer Not To Say']
    },
    pronouns: {
        type: String,
        enum: ['she/her', 'he/him', 'they/them', 'she/they', 'he/they', 'All', 'Not Specified Here']
    }, 
    hobbies: String,
    aboutMe: String,
});

module.exports = mongoose.model('Profile', profileSchema);
module.exports = mongoose.model('User', userSchema);