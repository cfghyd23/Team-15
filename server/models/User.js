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

function formatDate(dob) {
    // Check if dob is already in the desired format
    if (dob instanceof Date) {
      const day = dob.getDate().toString().padStart(2, '0');
      const month = (dob.getMonth() + 1).toString().padStart(2, '0');
      const year = dob.getFullYear();
      return `${day}-${month}-${year}`;
    }
    
    return dob; // Return as is if not a valid Date object
  }

module.exports= mongoose.model('User', UserSchema);