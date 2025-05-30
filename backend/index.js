const express = require("express")
const cors = require("cors");

require("dotenv").config();

const PORT = process.PORT || 3000;

// init express 

const app = express();

// enable cors
app.use(cors());

// routes 
app.use("/api/search/", require("./routes/SearchResult.js"));

app.listen(PORT, () => console.log(`app has started on port: ${PORT}`));