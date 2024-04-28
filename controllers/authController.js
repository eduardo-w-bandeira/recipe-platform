import bcrypt from 'bcrypt';
import { User } from '../models/user.js';

export async function userRegister(req, res) {
  const saltRounds = 10;
  try {
    const { username, email, password } = req.body;
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
  try {
    const { email, password } = req.body;
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
