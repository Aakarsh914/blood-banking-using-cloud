import pg from "pg";
import bcrypt from "bcryptjs";
import { env } from "./src/config/env.js";

const { Pool } = pg;

const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: { rejectUnauthorized: false }
});

async function run() {
  const hash = await bcrypt.hash("hospital", 10);
  
  try {
    const res = await pool.query("SELECT * FROM users WHERE email = $1", ['admin_gmc@test.com']);
    if (res.rows.length === 0) {
      console.log("Admin missing. Inserting...");
      await pool.query(
        "INSERT INTO users (email, password_hash, name, role, hospital_id) VALUES ($1, $2, $3, $4, $5)",
        ['admin_gmc@test.com', hash, 'GMC Hospital Admin', 'HOSPITAL', 1]
      );
      console.log("Inserted admin_gmc@test.com");
    } else {
      console.log("Admin exists. Updating password to 'hospital' to be safe...");
      await pool.query("UPDATE users SET password_hash = $1 WHERE email = $2", [hash, 'admin_gmc@test.com']);
      console.log("Updated password for admin_gmc@test.com");
    }
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

run();
