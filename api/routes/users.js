const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// Update user routes
router.put("/:id", async (req, res) => {
	// checking if userId === request parameter
	if (req.body.userId === req.params.id) {
		// checking password
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			req.body.password = await bcrypt.hash(req.body.password, salt);
		}
		try {
			// update user info
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				{
					$set: req.body,
				},
				{ new: true }
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(500).json(err);
		}
	} else {
		res.status(401).json("You only can update your account!");
	}
});

// Delete user
router.delete("/:id", async (req, res) => {
	// checking if userId === request parameter
	if (req.body.userId === req.params.id) {
		try {
			// find user id
			const user = await User.findById(req.params.id);
			try {
				// delete post by user
				await Post.deleteMany({ username: user.username });
				// delete user
				await User.findByIdAndDelete(req.params.id);
				res.status(200).json("User has been deleted.");
			} catch (err) {
				res.status(500).json(err);
			}
		} catch (err) {
			res.status(404).json("user not found!");
		}
	} else {
		res.status(401).json("You only can delete your account!");
	}
});

module.exports = router;
