const express = require('express');
const { home, register } = require('../controllers/main.controller');
const router = express.Router();

router.get('/', home);
router.post('/register', register);

module.exports = router;