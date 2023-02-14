const pool = require('./lib/utils/pool');
const setup = require('./data/setup');

setup(pool)
  .catch((e) => console.error(e))
  .finally(() => process.exit());
