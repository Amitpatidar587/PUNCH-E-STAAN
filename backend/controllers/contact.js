const Contact=require('../model/contact')


module.exports.showContact= async (req, res) => {
    const data = await Contact.find({});
    res.json(data);
  }
  
module.exports.addContact=async (req, res) => {
    let contact = req.body.employee;
    console.log("contact employee=>", contact);
    const newContact = new Contact(contact);
    await newContact.save();
    res.json({ message: "contact added" });
  }


module.exports.updateContact=async (req, res) => {
  let { id } = req.params;
  let employee = req.body.employee;
  let updateEmployee = await Contact.findByIdAndUpdate(id, { ...employee });
  console.log("updateEmployee is =>", updateEmployee);
  res.json({ message: "employee info update" });
}

module.exports.deleteContact=async (req, res) => {
    let { id } = req.params;
    deleteContact = await Contact.findByIdAndDelete(id);
    res.json({ message: "Contact has been deleted" });
  }