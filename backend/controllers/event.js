const Event=require('../model/events');


module.exports.showEvent=async (req, res) => {
    const data = await Event.find({});
    res.json(data);
  }

  module.exports.addEvent=async (req, res) => {
    let event = req.body.event;
    console.log("event=>", event);
    let newEvent = new Event(event);
    await newEvent.save();
    console.log(newEvent);
    res.json({ message: "New Event Added" });
  }

  module.exports.updateEvent=async (req, res) => {
    let { id } = req.params;
    console.log(req.body);
    let updateEvent = await Event.findByIdAndUpdate(id, { ...req.body.event });
    console.log("update event=>", updateEvent);
    res.json({ message: "update event" });
  }

  module.exports.deleteEvent=async (req, res) => {
    let { id } = req.params;
    let deleteEvent = await Event.findByIdAndDelete(id);
    console.log("delete event=>", deleteEvent);
    res.json({ message: "delete successfully" });
  }

