const express = require("express");
const router = express.Router();
const Event = require("../model/events");
const { eventSchema } = require("../schema");
const { validateEvent } = require("../middleware");
const WrapAsync = require("../utils/WrapAsync");
const { showEvent, addEvent, deleteEvent, updateEvent } = require("../controllers/event");

router.get(
  "/",
  WrapAsync(showEvent
));

router.post(
  "/",
  validateEvent,
  WrapAsync(addEvent
));

router.put(
  "/:id",
  validateEvent,
  WrapAsync(updateEvent)
);

router.delete(
  "/:id",
  WrapAsync(deleteEvent)
);

module.exports = router;
