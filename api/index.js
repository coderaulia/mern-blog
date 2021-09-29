const express = require("express");
const mongoose = require("mongoose");

const app = express();

// env
const dotenv = require("dotenv");
dotenv.config();

// mongose connection
mongoose
	.connect(process.env.MONGO_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(console.log("Connected to Mongo!!!"))
	.catch((err) => console.log(err));

app.listen(2021, () => {
	console.log("running!");
});
