const express = require('express');
const router = express.Router();
router.post('/', (req, res) => {
  res.send({ service_name: 'Michi UserData service', health: 'OK' });
});
module.exports = router;