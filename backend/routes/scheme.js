const express = require("express");
const Scheme = require("../model/scheme");
const { validateScheme } = require("../middleware");
const WrapAsync = require("../utils/WrapAsync");
const {
  showScheme,
  addScheme,
  updateScheme,
  deleteScheme,
} = require("../controllers/scheme");
const router = express.Router();

//scheme initial send
router.get("/", WrapAsync(showScheme));

router.post("/", validateScheme, WrapAsync(addScheme));

router.put("/:id", validateScheme, WrapAsync(updateScheme));

router.delete("/:id", WrapAsync(deleteScheme));

module.exports = router;
