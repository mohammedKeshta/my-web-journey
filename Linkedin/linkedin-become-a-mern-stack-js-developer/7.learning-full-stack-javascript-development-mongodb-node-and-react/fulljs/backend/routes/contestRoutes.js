let express = require('express');
let router = express.Router();
const contestController = require('../controllers/contestControllers');

router.route('/contests/').get(contestController.index);
router.route('/contests/:contestId').get(contestController.exists);
module.exports = router;
