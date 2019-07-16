const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Prodcut = require("../models/product");

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requrests to /products"
  });
});

router.post("/", (req, res, next) => {
  const prodcut = new product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));

  res.status(201).json({
    message: "Handling POST requrests to /products",
    createdProduct: product
  });
});

router.get("/:productId", (req, res, next) => {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "You discovered the special ID"
    });
  } else {
    res.status(200).json({
      message: "You passed an ID"
    });
  }
});

router.patch("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Updated product"
  });
});

router.delete("/:productId", (req, res, next) => {
  res.status(200).json({
    message: "Deleted product"
  });
});

module.exports = router;
