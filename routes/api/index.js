const express = require('express');

const router = express.Router();

const testJSON = [
  {
    name: 'John Smith',
    username: 'CaptainCode',
  },
  {
    name: 'Jane Doe',
    username: 'JaneyCakes',
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.json(testJSON);
});

router.get('/sendjson', (req, res, next) => {
  res.json(testJSON);
});

module.exports = router;
