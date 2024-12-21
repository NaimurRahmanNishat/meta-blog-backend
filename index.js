const express = require("express");
const app = express();
const port = 8000;
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// routes
const blogRoutes = require("./src/routes/blog.routes");
app.use("/blogs", blogRoutes);

// Database mongoose configuration
async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.get("/", (req, res) => {
    res.send("Hello Developers!");
  });
}

main()
  .then(() => console.log("Mongodb connected Successfully!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});