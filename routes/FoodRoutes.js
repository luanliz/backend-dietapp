const axios = require("axios");
const express = require("express");
const router = express.Router();
const apiUrl = `https://edamam-food-and-grocery-database.p.rapidapi.com/parser`;

router.get("/", async (req, res) => {
  try {
    if (!process.env.RANDOM_API_KEY) {
      throw new Error("You forgot to set RANDOM API KEY AND HOST");
    }

    const result = await axios.get(apiUrl, {
      headers: {
        "X-RapidAPI-Key": process.env.RANDOM_API_KEY,
        "X-RapidAPI-Host": process.env.RANDOM_API_HOST,
      },
      params: {
        ingr: req.query.ingr,
      },
    });

    res.send(result.data);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
