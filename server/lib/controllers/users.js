const { Router } = require('express');
const UserService = require('../models/UserService');
// eslint-disable-next-line new-cap
module.exports = Router()

  .post('/users', async (req, res, next) => {
    try {

      const user = await UserService.createUser(req.body);
      res.json(user);

    } catch (e) {
      
      next(e);
   
    }
  });
