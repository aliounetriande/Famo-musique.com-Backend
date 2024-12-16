const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const express = require("express");

const addNewUser = async (req, res) => {
    const {firstname, lastname, email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User ({
        firstname, lastname, email, password: hashedPassword
    })
    const savedUser = await user.save()
    res.status(201).json(savedUser)
};

const userLogin = async (req, res) => {
        try {
          const { email, password } = req.body
          const user = await User.findOne({ email })
          if (!user) {
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
          }
          const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
          });
          res.status(200).json({ token, userId: user._id });
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      
  };
module.exports = {addNewUser, userLogin}