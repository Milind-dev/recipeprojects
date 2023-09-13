const axios = require("axios");
// const data = require('../data.json')
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/usermodels");

const dashboardctrl = (req, res) => {
  res.send({ message: "dashboard" });
};

const Recipectrl = async (req, res) => {
  const RANDOMER_API_TOKEN = process.env.apikey;
  const baseurl = "https://api.spoonacular.com/recipes/complexSearch?apiKey="
  const query = req.query.query;
  const numbers = req.query.number;
  const searchurl = baseurl + RANDOMER_API_TOKEN;


  if (query && numbers) {
    const result = await axios.get(
      searchurl + "&query=" + `${query}` + "&number=" + `${numbers}`
    );
    res
      .status(200)
      .json({ message: "successfull recipe  both  query and number", data: result.data });
    return;
  }

  if (query) {
    const result = await axios.get(searchurl + "&query=" + `${query}`);
    res
      .status(200)
      .json({ message: "successfull query message ", data: result.data });
    return;
  }
  if (!query) {
    res.status(404).json({ message: "provide query message" });
    return;
  }
};

const paginationctrl = (req,res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const startIndex =   (page-1) * limit;
  const endIndex = page * limit;
  const pageshow = data.products.slice(startIndex,endIndex)
  res.status(200).json({message:"pagination",pageshow:pageshow}) 
}

const  localdatactrl = (req, res) => {
  res.status(200).send({ message: "successfull localdata stored " ,data:data});
};

const register = async (req, res) => {
  // const { error } = User.validate(req.body);
  // if (error) res.status(302).send({ message: error.details[0].message });

  try {
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const users = await User.findOne({ email: req.body.email });
    if (users) {
      res.status(409).send({ message: "User with given email already Exist!" });
    }

    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: hashPassword,
    });
    res.status(200).json({ message: "successfull register database ", ...req.body });
  } catch (error) {
    res.status(500).send({ messasge: "internal errors" });
  }
};

const login = async (req, res) => {

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(302).send({ message: "please check email" }); //here changes
  }
  const userAllowed = await bcrypt.compare(password, user.password);
  if (userAllowed) {
    const accessToken = jwt.sign({ user }, "secret-key-shhhh");
    return res.status(200).cookie("token", accessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 1000),
    }).json({ accessToken: accessToken, statusCodes:StatusCodes,status:StatusCodes.OK }).send();
  } else {
    return res.status(404).json({message:"No user found or invalid password",status:StatusCodes.NOT_FOUND}).send();
  }
};

module.exports = {
  dashboardctrl,
  Recipectrl,
  localdatactrl,
  paginationctrl,
  register,
  login
};
