const Scheme = require("../model/scheme");

module.exports.showScheme = async (req, res) => {
  const data = await Scheme.find({});
  res.json(data);
};

module.exports.addScheme = async (req, res) => {
  let { scheme } = req.body;
  let newScheme = new Scheme(scheme);
  await newScheme.save();
  res.json({ message: "New Scheme Add" });
};

module.exports.updateScheme = async (req, res) => {
  let { id } = req.params;
  const updateListing = await Scheme.findByIdAndUpdate(id, {
    ...req.body.scheme,
  });
  res.json({ message: "edit success" });
};

module.exports.deleteScheme = async (req, res) => {
  let { id } = req.params;
  let deleteScheme = await Scheme.findByIdAndDelete(id);
  res.json({ message: "delete scheme" });
};
