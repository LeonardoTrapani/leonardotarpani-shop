const express = require("express");

const router = express.Router();

//  admin/add-product
router.get("/add-product", (req, res, next) => {
  console.log("in another the middleware!");
  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">AddProduct</button></form>'
  );
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
