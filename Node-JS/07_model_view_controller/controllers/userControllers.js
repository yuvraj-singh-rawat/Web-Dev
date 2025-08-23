const User = require('../models/userModel');

// @desc   Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};

// @desc   Create user
exports.createUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Name and Email required" });
  }

  const newUser = await User.create({ name, email });
  res.status(201).json(newUser);
};
