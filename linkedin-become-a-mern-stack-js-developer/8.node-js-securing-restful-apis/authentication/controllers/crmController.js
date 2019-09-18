const Contact = require('../models/crmModel');

// Get All Contacts
exports.index = (req, res) => {
  Contact.get((err, contacts) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({
      status: 'success',
      message: 'Contacts retrieved successfully',
      data: contacts
    });
  });
};

// Add New Contact
exports.new = (req, res) => {
  const contact = new Contact(req.body);
  contact.save(err => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'New Contact Created successfully' });
  });
};

// Get Exist Contact
exports.exist = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({
      status: 'success',
      message: 'Contact details loading..',
      data: contact
    });
  });
};

// Update Contact
exports.update = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
    if (err) res.status(500).send({ status: 'error', message: err });
    res.status(200).json({
      status: 'success',
      message: 'Contact Info updated',
      data: contact
    });
  });
};
// Delete Contact
exports.delete = (req, res) => {
  Contact.remove({ _id: req.params.contactId }, err => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'Article Deleted' });
  });
};
