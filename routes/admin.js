const express = require("express");
const path = require("path");

const router = express.Router();

//  admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log("in another the middleware!");
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
