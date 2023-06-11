const mongoose= require('mongoose');

const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true,
        set: formatDate // Pre-save middleware to format dob before saving
    },
    ageType: {
        type: String,
        enum: ['young-adult', 'alum'],
        required: true
    },
    aadhaar: {
        type: Number,
        required: true
    },
    careTaker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Caretaker'
    },
    Residence: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    Education: {
        type: String,
        required: true
    }, 
    Employment: {
        type: String
    },

    role: {
        type: String,
        default: 'rhb'
    }

});


module.exports= mongoose.model('User', UserSchema);