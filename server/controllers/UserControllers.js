const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    dob,
    ageType,
    aadhaar,
    careTaker,
    Residence,
    City,
    Education,
    Employment
  } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      password,
      dob,
      ageType,
      aadhaar,
      careTaker,
      Residence,
      City,
      Education,
      Employment
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const {
    name,
    email,
    password,
    dob,
    ageType,
    aadhaar,
    careTaker,
    Residence,
    City,
    Education,
    Employment
  } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        password,
        dob,
        ageType,
        aadhaar,
        careTaker,
        Residence,
        City,
        Education,
        Employment
      },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
