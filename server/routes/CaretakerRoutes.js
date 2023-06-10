const express = require('express');
const caretakerController = require('../controllers/CaretakerControllers');

const router = express.Router();

// get users of the caretaker.
router.get('/myusers/:id', caretakerController.getAllUsers);

// Get a single caretaker by ID
router.get('/:id', caretakerController.getCaretakerById);

// Create a new caretaker
router.post('/signup', caretakerController.createCaretaker);

// Login in a new caretaker
router.post('/signin', caretakerController.loginCaretaker)

// Update a caretaker
router.put('/:id', caretakerController.updateCaretaker);


module.exports = router;
