const express = require('express')
const router = express.Router()
const NotifyClient = require('notifications-node-client').NotifyClient
const notify = new NotifyClient(process.env.NOTIFYAPIKEY)

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line

router.post('/candidate/v05/index', function (req, res) {

  notify.sendEmail(
    'e0b03a31-cfc9-48f3-9372-9114ae21ebf2',
    'applyforteachertraining@digital.education.gov.uk',
    {"form_content": req.session.data}
  );

  res.redirect('/candidate/v05/confirmation');

});

module.exports = router
