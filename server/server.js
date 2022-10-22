const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const wordsRoute = require("./routes/words");
const ranksRoute = require("./routes/ranks");

// Words Endpoint
app.use("/api/words", wordsRoute);

//Rank Endpoint
app.use("/api/rank", ranksRoute);

const port = 5000;

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
