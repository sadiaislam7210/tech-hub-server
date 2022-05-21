const express = require("express");
const cors = require("cors");
require("dotenv").config();

// For Middleware
const app = express();
app.use(cors());
app.use(express.json());