const SOS= require('../models/SOS');
const User= require('../models/User');
const Caretaker= require('../models/Caretaker');

const takeAlert= async(req, res) => {
    const {uid}= req.params;
    try {
        const auser= await User.findById(uid);
        console.log(auser);
        const cid= auser.careTaker;
        // const cid= await User.findById(uid).select('careTaker');
        const newSOS= new SOS({
            user: uid, 
            caretaker: cid
        });

        const savedSOS= await newSOS.save();
        res.status(200).json('Alert Sent.');
    } catch (err) {
        console.log(err);
        res.status(400).json('Re-send SOS');
    }
}

const chkAlert= async (req, res) => {
    const {cid}= req.params;
    try {
        const alerts= await SOS.find({ caretaker: cid });
        const alertUsers= [];
        for (const alert of alerts) {
            if (!alert.isChecked) {
                const user= await User.findById(alert.user);
                alertUsers.push(alert);
            }
          }

        res.status(200).json(alertUsers);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
}

const answerAlert= async (req, res) => {
    const {id}= req.params;
    try {
        const alert= await SOS.findById(id);
        await deleteOne(alert);
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message});
    }
}

module.exports= {
    takeAlert,
    chkAlert,
    answerAlert
};