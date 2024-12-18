// const mongoose = require('mongoose');

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'], // Custom error message
    minlength: [2, 'Name must be at least 2 characters long'], // Validation with message
  },
  email: {
    type: String,
    required: [true, 'Email is required'], // Custom error message
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\S+@\S+\.\S+$/, // Regex to validate email format
      'Please enter a valid email address', // Error message for invalid email
    ],
  },
  password: {
    type: String,
    required: [true, 'Password is required'], // Custom error message
  },
  groups: [
    {
      groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
      joinedAt: { type: Date, default: Date.now },
    },
  ],
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

// module.exports = User;
export default User;