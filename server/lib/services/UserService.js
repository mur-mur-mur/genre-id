const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

module.exports = class UserService {

  static async createUser({ email, password, firstName, lastName }) {
    const passwordHash = await bcrypt.hash(
      password,
      Number(SALT_ROUNDS)
    );

    const user = await User.insert({
      email,
      passwordHash,
      firstName,
      lastName
    });

    return user;
  }


  static async signIn({ email, password = '' }) {
    try {

      const user = await User.getByEmail(email);

      if (!user) throw new Error('That email is invalid. Please try again');

      if (!bcrypt.compareSync(password, user.passwordHash))
        throw new Error('That password is invalid. Please try again');

      const token = jwt.sign({ ...user }, JWT_SECRET, {
        expiresIn: '1 day'
      });
      return token;

    } catch (e) {
      
      e.status = 401;
      throw e;
    
    }
  }
};
