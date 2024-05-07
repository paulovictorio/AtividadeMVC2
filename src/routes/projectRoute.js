const express = require('express')
const router = express.Router()

const projectController = require('../controllers/projectController');

router.get('/project', projectController.getProject);
router.post('/project', projectController.create);
router.get('/project/:id', projectController.details);

module.exports = router;