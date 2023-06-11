const Caretaker = require('../models/Caretaker');
const bcrypt= require('bcrypt');
const User = require('../models/User');
const jwt = require("jsonwebtoken");

// Get all users
const getAllUsers = async (req, res) => {
  const { id }= req.params;
    try {
      const caretaker = await Caretaker.findById(id);
      const myUsers= [];
      
      for (const userId of caretaker.users) {
        const user= await User.findById(userId);
        if (user) {
          myUsers.push(user);
        }
      }

      res.json(myUsers);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};


// Get a single caretaker by ID
const getCaretakerById = async (req, res) => {
  const { id } = req.params;
  try {
    const caretaker = await Caretaker.findById(id);

    if (!caretaker) {
      return res.status(404).json({ message: 'Caretaker not found' });
    }

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new caretaker
const createCaretaker = async (req, res) => {
  const { name, email, password, homename } = req.body;
  try {
    console.log(req.body);
    const hashed= await bcrypt.hash(password, 10);
    const newCaretaker = new Caretaker({ name, email, password: hashed, homename });

    const savedCaretaker = await newCaretaker.save();
    res.status(201).json(savedCaretaker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a caretaker
const updateCaretaker = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    homename,
    users
  } = req.body;
  try {
    const user = await Caretaker.findByIdAndUpdate(
      id,
      {
        name,
        email,
        homename,
        users
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

// Login Caretaker
const loginCaretaker = async (req, res) => {
  const {email, password}= req.body;

  try {
    const existingUser= await Caretaker.findOne({email});
    if (!existingUser) {
      res.status(400).json('Caretaker does not exist. Better sign up');
    }
    console.log(existingUser);
    const isPasswordMatched= await bcrypt.compare(password, existingUser.password);
    if (!isPasswordMatched) {
      res.status(400).json('Email / Password Not Matched.');
    }

    res.json(existingUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCaretakerById,
  createCaretaker,
  updateCaretaker,
  loginCaretaker,
  getAllUsers
};
