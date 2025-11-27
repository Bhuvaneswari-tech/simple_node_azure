const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from Azure Node.js App!' });
});

module.exports = router;
