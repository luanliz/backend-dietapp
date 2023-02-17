require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const apiUrl = `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=+${endPoint}`;
const [endPoint, setEndpoints] = useState("");

app.get("/food", async (req, res, next) => {
  try {
    if (!procces.env.RANDOMER_API_TOKEN) {
      throw new Error("You forgot to set RANDOM API KEY AND HOST");
    }

    const result = await axios.get(apiUrl, {
      headers: {
        "X-RapidAPI-Key": process.env.RANDOM_API_KEY,
        "X-RapidAPI-Host": process.env.RANDOM_API_HOST,
      },
    });
    res.json(result.data);
  } catch (error) {
    next(error);
  }
});
