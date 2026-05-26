import pg from "pg";
import { env } from "./src/config/env.js";

const { Pool } = pg;
const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: { rejectUnauthorized: false }
});

pool.query("SELECT * FROM users WHERE email = 'admin_gmc@test.com'").then(res => {
  console.log(res.rows[0]);
  pool.end();
}).catch(console.error);
