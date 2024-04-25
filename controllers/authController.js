import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import { User } from '../models/user.js';

// For Sole Entity Endpoints
export async function userRegister(req, res) {
  const saltRounds = 10;
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send(`User registered successfully`);
  } catch (err) {
    console.error(`Unable to register a new user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}

export async function userLogin(req, res) {
  const { username, password } = req.body;
  try {
    const loginUser = await User.findOne({ username: username }).exec();
    const match = await bcrypt.compare(password, loginUser.password);
    if (match) {
      // login
      res.status(200).send(`Loged in successfully`);
    } else {
      // failed
      res.status(500).send('Username or password may be wrong. Try again');
    }
  } catch (err) {
    console.error(`Unable to register a new user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}
