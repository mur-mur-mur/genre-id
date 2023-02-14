const { Router } = require('express');
const UserService = require('../models/UserService');
const authenticate = require('../middleware/authenticate');
const authorize = require('../middleware/authorize');

const COOKIE_NAME = process.env.COOKIE_NAME;
const SECURE_COOKIES = process.env.SECURE_COOKIES;
const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

// eslint-disable-next-line new-cap
module.exports = Router()

  .post('/users', async (req, res, next) => {
    try {

      const user = await UserService.createUser(req.body);
      res.json(user);

    } catch (e) {
      
      next(e);
   
    }
  })

  .post('/users/in', async (req, res, next) => {
    try {
      const token = await UserService.signIn(req.body);

      res
        .cookie(COOKIE_NAME, token, {
          httpOnly: true,
          secure: SECURE_COOKIES === 'true',
          sameSite: SECURE_COOKIES === 'true' ? 'none' : 'strict',
          maxAge: ONE_DAY_IN_MS })
          
        .json({ message: 'You have been signed in successfully!' });
     
    } catch (e) {
      
      next(e);
    
    }
  })

  .get('/users/me', [authenticate], async (req, res) => {
    
    res.json(req.user);
  
  })

  .get('/users/all', [authenticate, authorize], async (req, res, next) => {
    try {
  
      const users = await UserService.getAll();
      res.json(users);

    } catch (e) {

      next(e);
  
    }
  })

  .delete('/users/in', (req, res) => {
  
    res
      .clearCookie(COOKIE_NAME, {
        httpOnly: true,
        secure: SECURE_COOKIES === 'true',
        sameSite: SECURE_COOKIES === 'true' ? 'none' : 'strict',
        maxAge: ONE_DAY_IN_MS
      })
  
      .status(204)
  
      .send();
  });


