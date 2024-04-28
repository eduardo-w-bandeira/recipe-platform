import bcrypt from 'bcrypt';
import { User } from '../models/user.js';

// For Sole Entity Endpoints
export async function userRegister(req, res) {
  const saltRounds = 10;
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
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
  const { email, password } = req.body;
  try {
    const loginUser = await User.findOne({ email }).exec();
    const match = await bcrypt.compare(password, loginUser.password);
    if (match) {
      // login
      res.status(200).send(`Logged in successfully`);
    } else {
      // failed
      res.status(500).send('Email or password may be wrong. Try again');
    }
  } catch (err) {
    console.error(`Unable to register a new user: ${err}`);
    res.status(500).send({ message: err.message });
  }
}
