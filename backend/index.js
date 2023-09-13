const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require('./config/database')


const app = express();
const {
  RecipeRoute,
  dashboardRoute,
  localdatasRoute,
  paginationRoute,
  registerRouter,
  loginRouter,
} = require("./routes/routes");

require("dotenv").config();
//database connection
connection()
app.use(express.json())

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", localdatasRoute);
app.use("/food/products", RecipeRoute);
app.use("/food/products", dashboardRoute);
app.use("/pagination", paginationRoute);
app.use('/user',registerRouter)
app.use('/user',loginRouter)



const port = process.env.port || 4000;
app.listen(port, (req, res) => {
  console.log(`ports ${process.env.port}`);
});
