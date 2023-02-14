const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const COOKIE_NAME = process.env.COOKIE_NAME;

module.exports = async (req, res, next) => {
  try {

    const cookie = req.cookies[COOKIE_NAME];

    if (!cookie) throw new Error('You must be signed in to continue');

    const user = jwt.verify(cookie, JWT_SECRET);
    req.user = user;

    next();

  } catch (e) {
    
    e.status = 401;
    next(e);
  
  }
};
