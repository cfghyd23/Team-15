const express = require('express');
const userController = require('../controllers/UserControllers');

const router = express.Router();

router.post('/signup', userController.createUser);
router.post('/signin', userController.loginUser);
router.put('/edit/:id', userController.updateUser);
router.get('/:id', userController.getUserById);

// // Get all users
// // router.get('/', userController.getAllUsers);

// // Get a single user by ID
// router.get('/:userId', userController.getUserById);

// // Create a new user
// router.post('/signup', userController.createUser);

// // Login the user
// router.post('/signin', userController.loginUser);

// // Update a user
// router.put('/edit/:userId', userController.updateUser);

module.exports = router;
