const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.getProducts(products => {
    res.render("shop/product-list", {
      products: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.getProducts(products => {
    res.render("shop/index", {
      products: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
}

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart"
  });
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout"
  })
}