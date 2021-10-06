const express = require("express");
const mongoose = require("mongoose");

const app = express();
const authRoute = require("./routes/auth");

// env
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

// mongose connection
mongoose
	.connect(process.env.MONGO_URL, {})
	.then(console.log("Connected to Mongo!!!"))
	.catch((err) => console.log(err));

app.use("/api/auth", authRoute);

app.listen(2021, () => {
	console.log("running!");
});
