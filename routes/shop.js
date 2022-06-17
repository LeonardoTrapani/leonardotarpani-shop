const express = require("express");
const path = require("path");
const { products } = require("./admin");
const router = express.Router();

const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.render("shop", { products: products, pageTitle: "Shop", path: "/"});
});

module.exports = router;
