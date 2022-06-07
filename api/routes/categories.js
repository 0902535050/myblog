const router = require("express").Router();

const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const newCat = new Category(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const getCats = await Category.find();
    res.status(200).json(getCats);
  } catch (err) {
    res.status(500).json(err);
  }
});

// FIX throw new TypeError('Router.use() requires a middleware funct a ' + gettype(fn))
module.exports = router;
