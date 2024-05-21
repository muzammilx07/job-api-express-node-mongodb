const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

router.post('/jobs', jobController.createJob);
router.get('/jobs', jobController.getJobs);
router.put('/jobs/:id', jobController.updateJob);
router.delete('/jobs/:id', jobController.deleteJob);

module.exports = router;
