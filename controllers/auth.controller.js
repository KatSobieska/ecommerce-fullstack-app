const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const fs = require("fs");

exports.register = async (req, res) => {
  try {
    const { login, password } = req.body;

    if (
      login &&
      typeof login === "string" &&
      password &&
      typeof password === "string"
    ) {
      const userWithLogin = await User.findOne({ login });
      if (userWithLogin) {
        fs.unlinkSync(req.file.path);
        return res.status(409).json({ message: "User already exists" });
      }

      const user = await User.create({
        login,
        password: await bcrypt.hash(password, 10),
      });
      res.status(201).send({ message: "User created " + user.login });
    } else {
      res.status(400).send({ message: "Bad request" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.login = async (req, res) => {
  try {
    const { login, password } = req.body;
    console.log(login, password);

    if (
      login &&
      typeof login === "string" &&
      password &&
      typeof password === "string"
    ) {
      const user = await User.findOne({ login });

      if (!user) {
        res.status(400).send({ message: "Login or password as incorrect" });
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.login = user.login;
          req.session.save();
          console.log("Session", req.session.login);
          res.status(200).send({ message: "Login succesfull" });
        } else {
          res.status(400).send({ message: "Login or password are incorrect" });
        }
      }
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.getUser = async (req, res) => {
  res.send({ message: "Yeah, I'm logged" });
};

exports.logout = async (req, res) => {
  req.session.destroy();
  res.send({ message: "You have succesfully logged out" });
};
