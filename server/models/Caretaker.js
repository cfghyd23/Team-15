const mongoose = require("mongoose");

const CaretakerSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        // maxLength:[30,"Name cannot exceed 30 characters"],
        // minLength:[4,"Name should have more than 5 characters"]
    },
    email: {
        type:String,
        required: true,
        unique: true,
        // validate:[validator.isEmail,"Please enter a valid email"]
    },
    password: {
        type:String,
        required: true
    },
    homename: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'Caretaker'
    },
    users: {
        type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
        }
      ],
      default: []
    }
});

module.exports = mongoose.model("Caretaker", CaretakerSchema);