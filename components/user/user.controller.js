const User = require('./user.model');

const login = async ({
  reply,
  req,
  body,
}) => {
  try {
    const result = await User.login(body, req);
    reply(result);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
};