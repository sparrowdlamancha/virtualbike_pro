import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Register new user
router.post('/register', async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      secondLastName,
      username,
      email,
      phone,
      password,
      emailConsent,
      smsConsent,
      dataConsent
    } = req.body;

    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (existingUser) {
      return res.status(400).json({
        message: 'El usuario o correo electrónico ya está registrado'
      });
    }

    // Create new user
    const user = new User({
      firstName,
      middleName,
      lastName,
      secondLastName,
      username,
      email,
      phone,
      password,
      emailConsent,
      smsConsent,
      dataConsent
    });

    await user.save();

    res.status(201).json({
      message: 'Usuario registrado exitosamente'
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      message: 'Error en el registro',
      error: error.message
    });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username or email
    const user = await User.findOne({
      $or: [{ username }, { email: username }]
    });

    if (!user) {
      return res.status(401).json({
        message: 'Usuario o contraseña incorrectos'
      });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        message: 'Usuario o contraseña incorrectos'
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      message: 'Error en el inicio de sesión',
      error: error.message
    });
  }
});

export default router;