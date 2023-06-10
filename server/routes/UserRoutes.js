const express = require('express');
const userController = require('../controllers/UserControllers');

const router = express.Router();

// Get all users
router.get('/', userController.getAllUsers);

// Get a single user by ID
router.get('/:userId', userController.getUserById);

// Create a new user
router.post('/', userController.createUser);

// Update a user
router.put('/:userId', userController.updateUser);

// Delete a user
router.delete('/:userId', userController.deleteUser);

module.exports = router;
