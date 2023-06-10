const mongoose= require('mongoose');

const SOSSchema= new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    caretaker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Caretaker',
        required: true
    },
    isChecked: {
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports= new mongoose.model('SOS', SOSSchema);