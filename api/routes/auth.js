const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Register routes
router.post("/register", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPass = await bcrypt.hash(req.body.password, salt);
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		});

		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Login
router.post("/login", async (req, res) => {
	try {
		// checking username
		const user = await User.findOne({ username: req.body.username });
		// validated response
		!user && res.status(400).json("Wrong credentials!");

		// checking password
		const validated = await bcrypt.compare(req.body.password, user.password);
		// validated response
		!validated && res.status(400).json("Wrong credentials!");

		const { password, ...others } = user._doc;

		res.status(200).json(others);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
