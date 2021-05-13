/** Load required npm modules here */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors =require("cors")
require("dotenv/config");

/** Initialize express */
const app = express();

/** Initialize middlewares */
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());
// app.use(express static(path join(__dirname,"build")))

/** Set port number */
const port = process.env.PORT || 8080;

/** Basic route */
app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*")
  res.send("Hello, Welcome to Node.js Development");
});

/** Connection to Database */
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) =>
    console.log(`Unable to connect to database: ${process.env.MONGO_URI}`, err)
  );

/** Routes definitions files */
const usersRouter = require("./routes/users");
const { static } = require("express");

/** Use routes */
app.use("/users", usersRouter);

/** Start server */
app.listen(port, () => {
  console.log(`Server running successfully in the Port: ${port}`);
});





// console.log("chandu", process);
// process.stdin.resume();
// 	process.stdin.setEncoding('utf8');

// 	var stdin = '';
// 	process.stdin.on('data', function (chunk) {
// 	  stdin += chunk;
// 	}).on('end', function() {
// 	  var lines = stdin.trim().split('\n');
// 	  for(var i=0; i<lines.length; i++) {
// 	  	// one value per line, parse string into integer and multiply
// 	  	var result = parseInt(lines[i]) * parseInt(lines[i]);
// 	  	// convert result to string
// 	    process.stdout.write(result.toString());
// 	  }
// 	});


