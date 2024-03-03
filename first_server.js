const express = require("express");
const app = express();
const ExpressError = require("./expressError");

const { findMode, findMean, findMedian } = require("./functions");

app.use(express.json());

app.get("/mean", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError("Nums are required", 400);
  }

  let stringArray = req.query.nums.split(",");
  let nums = stringArray.map(Number);
  console.log(nums);
  for (let num of nums) {
    if (isNaN(num)) {
      throw new ExpressError(`${num} is not a number`, 400);
    }
  }

  let result = {
    operation: "mean",
    value: findMean(nums),
  };

  return res.json(result);
});

app.get("/median", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError("Nums are required", 400);
  }
  let stringArray = req.query.nums.split(",");
  let nums = stringArray.map(Number);
  console.log(nums);
  for (let num of nums) {
    if (isNaN(num)) {
      throw new ExpressError(`${num} is not a number`, 400);
    }
  }

  let result = {
    operation: "median",
    value: findMedian(nums),
  };

  return res.json(result);
});

app.get("/mode", (req, res, next) => {
  if (!req.query.nums) {
    throw new ExpressError("Nums are required", 400);
  }
  let stringArray = req.query.nums.split(",");
  let nums = stringArray.map(Number);
  for (let num of nums) {
    if (isNaN(num)) {
      throw new ExpressError(`${num} is not a number`, 400);
    }
  }

  let result = {
    operation: "mode",
    value: findMode(nums),
  };

  return res.json(result);
});

app.listen(3000, () => {
  console.log("App on port 3000");
});
