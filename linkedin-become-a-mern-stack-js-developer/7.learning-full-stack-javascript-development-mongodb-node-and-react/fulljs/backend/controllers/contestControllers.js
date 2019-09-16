Contest = require('../models/contestModel');

// Get All Contests
exports.index = (req, res) => {
  Contest.get((err, contests) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'Contests retrieved successfully', data: contests });
  });
};

// Get Specific Contests
exports.exists = (req, res) => {
  Contest.findById(req.params.contestId, (err, contest) => {
    if (err) res.status(500).json({ status: 'error', message: err });
    res.status(200).json({ status: 'success', message: 'Contact details loading..', data: contest });
  });
};
