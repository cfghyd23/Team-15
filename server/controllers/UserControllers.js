const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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


// Login a user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Compare the provided password with the stored password
      const isPasswordMatched = await bcrypt.compare(password, user.password);
      if (!isPasswordMatched) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { userId: user._id },
        'your-secret-key',
        { expiresIn: '1h' }
      );
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  loginUser
};