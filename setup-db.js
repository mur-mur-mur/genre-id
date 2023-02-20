const pool = require('./server/lib/utils/pool');
const setup = require('./server/data/setup');

setup(pool)
  .catch((e) => console.error(e))
  .finally(() => process.exit());
