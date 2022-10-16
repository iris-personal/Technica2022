const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema ({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
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
