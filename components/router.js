const express = require('express');
const router = express.Router();
const User = require('./user/user.model');

router.post('/login', async (req, res) => {
  const result = await User.login(req.body);
  res.send({ result });
});
module.exports = router;