const { POST, GET, PUT } = require('express-object-router/methods');
const joi = require('joi');
const userController = require('./user.controller');

module.exports = [
  {
    method: POST,
    path: '/login',
    controller: userController.login,
    validation: {
      body: {
        username: joi.string().required(),
        password: joi.string().required(),
      },
    },
    middlewaresProps: {
      // allowAccess: [EVERYONE],
    },
  },
];