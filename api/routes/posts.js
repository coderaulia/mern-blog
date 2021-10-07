const router = require("express").Router();
import { Categories } from "parts/Categories";
const User = require("../models/User");
const Post = require("../models/Post");

// Create Post

router.post("/", async (req, res) => {
	const newPost = new Post(req.body);
	try {
		const savedPost = await newPost.save();
		res.status(200).json(savedPost);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Update post routes
router.put("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				const updatedPost = await Post.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);

				res.status(200).json(updatedPost);
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(500).json("You can update only your post!");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// Delete post
router.delete("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (post.username === req.body.username) {
			try {
				await post.delete();
				res.status(200).json("Post has beeen deleted");
			} catch (err) {
				res.status(500).json(err);
			}
		} else {
			res.status(500).json("You can delete only your post!");
		}
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get post data
router.get("/:id", async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(200).json(post);
	} catch (err) {
		res.status(500).json(err);
	}
});

// Get all Posts

router.get("/", async (req, res) => {
	const username = req.query.user;
	const catName = req.query.cat;
	try {
		let posts;
		// get data by username
		if (username) {
			posts = await Post.find({ username });

			// get data by category name
		} else if (catName) {
			posts = await Post.find({
				categories: {
					$in: [catName],
				},
			});

			// get all posts
		} else {
			posts = await Post.find();
		}
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
