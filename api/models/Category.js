const mongoose = require("mongoose");

// Create category schema
const CategorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
