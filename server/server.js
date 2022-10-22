const express = require("express");
const wordsRoute = require("./routes/words");
const ranksRoute = require("./routes/ranks");
const fs = require("fs");

const app = express();

// App Middleware
app.use(express.json());

//Routes Middleware
app.use("/api/words", wordsRoute); // Words Endpoint
app.use("/api/rank", ranksRoute); //Rank Endpoint

const port = 5000;
app.listen(port, () => console.log(`Server started on PORT: ${port}`));
