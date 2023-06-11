const express= require('express');
const router= express.Router();
const sosControllers= require('../controllers/SOSController');

router.post('/send/:uid', sosControllers.takeAlert); // takes user id
router.get('/check/:cid', sosControllers.chkAlert); // takes caretaker id
router.delete('/answered/:id', sosControllers.answerAlert); // takes SOS id as param

module.exports= router;