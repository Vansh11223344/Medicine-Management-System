import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  // your config here
});
export default pool;
