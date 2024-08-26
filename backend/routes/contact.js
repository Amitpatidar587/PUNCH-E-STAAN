const express = require("express");
const router = express.Router();
const Contact = require("../model/contact");
const { validateContact } = require("../middleware");
const WrapAsync = require("../utils/WrapAsync");
const { showContact, addContact, updateContact, deleteContact } = require("../controllers/contact");

router.get("/", WrapAsync(showContact));

router.post("/",validateContact,WrapAsync( addContact));

router.put("/:id",validateContact,WrapAsync( updateContact));

router.delete("/:id", WrapAsync(deleteContact));

module.exports = router;
