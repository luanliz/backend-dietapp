const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const cors = require("cors");
const foodRouter = require("./routes/FoodRoutes");
const userRouter = require("./routes/UserRoutes");

dotenv.config();

const port = process.env.PORT;
const app = express();

//config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: `http://localhost:${port}` }));

//DB connection
require("./config/db.js");

//routes
const router = express.Router();
router.use("/foods", foodRouter);
router.use("/users", userRouter);

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
