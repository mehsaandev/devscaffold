const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require('../models/userModel.js')
const saltRounds = 12;


const register = async (req, res) => {
  console.log(req.body);
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.send({ message: "User already exists." });
    if (password !== confirmPassword)
      return res.send({ message: "Password doesn't match." });

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const result = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({token:token} );
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser == null)
      return res.status(200).json({ message: "User does not exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(200).json({ message: "Invalid Credentials." });
    } else {
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        "test",
        { expiresIn: "1h" }
      );
        res
          .status(200)
          .json({ result: existingUser, token, response: "Login Successfull" });
      }
    }
   catch (error) {
    res.status(404).json({ message: "Something Went Wrong." });
  }
};

module.exports = {register,login}







