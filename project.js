const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  username: { type: String, 
    required: true, 
    unique: true },
    
  email: { type: String, 
    required: true, 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'] },

  password: { type: String, 
    required: true,
    minlength: 8,
    match: [/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least one uppercase letter, one number, and one special character'] 
  },

  role: { type: String, default: 'user' },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
