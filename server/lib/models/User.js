const pool = require('../utils/pool');

module.exports = class User {
  id;
  email;
  #passwordHash;
  firstName;
  lastName;

  constructor(row) {

    this.id = row.id;
    this.email = row.email;
    this.passwordHash = row.password_hash;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
  }

  static async insert({ email, password_hash, first_name, last_name }) {
    const { rows } = await pool.query(
      'INSERT INTO users (email, password_hash, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *',
      [email, password_hash, first_name, last_name]
    );

    return new User(rows[0]);
  }

  static async getByEmail(email) {
    const { rows } = await pool.query(
      'SELECT * FROM users WHERE email=$1',
      [email]
    );

    rows[0] ? new User(rows[0]) : console.info('There is no user stored with that email');
  }
  get passwordHash() {
    return this.#passwordHash;
  }
};



