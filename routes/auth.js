const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

router.post('/register', register);
router.post('/login', login);

module.exports = router;
