const User = require('../models/User');
const Caretaker= require('../models/Caretaker');
const bcrypt = require('bcrypt');

// Get all users
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// Get a single user by ID
const getUserById= async (req, res) => {
  const { id }= req.params;
  try {
    const fetchedUser= await User.findById(id);
    if (!fetchedUser) {
      return res.status(400).json({ message: 'User not found' });
    }

    res.status(200).json(fetchedUser);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}


// // Create a new user
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
    Employment,
  } = req.body;
  try {
    const hashed= await bcrypt.hash(password, 10);
    const myCaretaker= await Caretaker.findOne({ name: careTaker });
    
    const newUser = new User({
      name,
      email,
      password: hashed,
      dob,
      ageType,
      aadhaar,
      careTaker: myCaretaker._id,
      Residence,
      City,
      Education,
      Employment,
    });
    
    const savedUser = await newUser.save();
    myCaretaker.users.push(savedUser._id);
    myCaretaker.save();

    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// // Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    email,
    dob,
    ageType,
    aadhaar,
    careTaker,
    Residence,
    City,
    Education,
    Employment,
  } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        dob,
        ageType,
        aadhaar,
        careTaker,
        Residence,
        City,
        Education,
        Employment,

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

// // Login a user
const loginUser= async (req, res) => {
  const {email, password}= req.body;

  try {
    const existingUser= await User.findOne({email});
    if (!existingUser) {
      res.status(400).json('User does not exist. Better sign up');
    }

    const isPasswordMatched= await bcrypt.compare(password, existingUser.password);
    if (!isPasswordMatched) {
      res.status(400).json('Email / Password Not Matched.');
    }

    res.json(existingUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  // getAllUsers,
  getUserById,
  createUser,
  updateUser,
  loginUser
};