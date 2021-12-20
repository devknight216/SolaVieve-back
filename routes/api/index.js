var express = require('express');
var router = express.Router();
const db = require('../../controllers/feedback');

/* get the request about the Feedback */
router.post('/feedback', db.createFeedback);
router.get('/feedback', db.getFeedback);

module.exports = router;
