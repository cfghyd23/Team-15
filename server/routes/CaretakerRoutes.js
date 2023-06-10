const express = require('express');
const caretakerController = require('../controllers/CaretakerControllers');

const router = express.Router();

// Get all caretakers
router.get('/', caretakerController.getAllCaretakers);

// Get a single caretaker by ID
router.get('/:caretakerId', caretakerController.getCaretakerById);

// Create a new caretaker
router.post('/', caretakerController.createCaretaker);

// Update a caretaker
router.put('/:caretakerId', caretakerController.updateCaretaker);

// Delete a caretaker
router.delete('/:caretakerId', caretakerController.deleteCaretaker);

module.exports = router;
