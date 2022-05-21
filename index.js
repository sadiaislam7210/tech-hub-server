const express = require("express");
const cors = require("cors");
require("dotenv").config();

// For Middleware
const app = express();
app.use(cors());
app.use(express.json());

/********************************************\
            MongoDB Connection Start
\********************************************/
// Import
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.j0djh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});



// Create root API
app.get("/", (req, res) => {
  res.send("Running Electra server");
});
