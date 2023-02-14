const bcrypt = require('bcrypt');
const User = require('../models/User');

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
};
