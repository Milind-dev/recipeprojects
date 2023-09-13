const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
    username: { type: String },
	email: { type: String },
	password: { type: String},
});

const User = mongoose.model("Shoes", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		userName: Joi.string().required().label("userName"),
		email: Joi.string().email().required().label("email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };

// module.exports = { User};
