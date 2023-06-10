const Caretaker = require('../models/Caretaker');
const User = require('../models/User');
const jwt = require("jsonwebtoken");

// Get all caretakers
const getAllCaretakers = async (req, res) => {
  try {
    const caretakers = await Caretaker.find();
    res.json(caretakers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};


// Get a single caretaker by ID
const getCaretakerById = async (req, res) => {
  const { caretakerId } = req.params;
  try {
    const caretaker = await Caretaker.findById(caretakerId);
    if (!caretaker) {
      return res.status(404).json({ message: 'Caretaker not found' });
    }
    res.json(caretaker);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new caretaker
const createCaretaker = async (req, res) => {
  const { name, email, password, homename } = req.body;
  try {
    
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
  const { caretakerId } = req.params;
  const { name, email, password, homename } = req.body;
  try {
    const caretaker = await Caretaker.findByIdAndUpdate(
      caretakerId,
      { name, email, password, homename },
      { new: true }
    );
    if (!caretaker) {
      return res.status(404).json({ message: 'Caretaker not found' });
    }
    res.json(caretaker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a caretaker
const deleteCaretaker = async (req, res) => {
  const { caretakerId } = req.params;
  try {
    const deletedCaretaker = await Caretaker.findByIdAndRemove(caretakerId);
    if (!deletedCaretaker) {
      return res.status(404).json({ message: 'Caretaker not found' });
    }
    res.json({ message: 'Caretaker deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login Caretaker
const loginCaretaker = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the caretaker by email
      const caretaker = await Caretaker.findOne({ email });
      if (!caretaker) {
        return res.status(404).json({ message: 'Caretaker not found' });
      }
  
      // Compare the provided password with the stored password
      const isPasswordMatched = await bcrypt.compare(password, caretaker.password);
      if (!isPasswordMatched) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { caretakerId: caretaker._id },
        'your-secret-key',
        { expiresIn: '1h' }
      );
  
      res.json({ token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

module.exports = {
  getAllCaretakers,
  getCaretakerById,
  createCaretaker,
  updateCaretaker,
  deleteCaretaker,
  loginCaretaker,
  getAllUsers
};
