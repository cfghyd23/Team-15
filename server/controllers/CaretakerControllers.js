const Caretaker = require('../models/Caretaker');
const bcrypt= require('bcrypt');

// Get all caretakers
const getAllCaretakers = async (req, res) => {
  try {
    const caretakers = await Caretaker.find();
    res.json(caretakers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login caretaker


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

module.exports = {
  getAllCaretakers,
  getCaretakerById,
  createCaretaker,
  updateCaretaker,
  deleteCaretaker
};
