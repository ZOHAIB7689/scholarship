import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString: process.env.DATABASE_URL!,
});

export async function addApplication(name: string, email: string, program: string) {
  const result = await pool.sql`
    INSERT INTO applications (name, email, program)
    VALUES (${name}, ${email}, ${program})
    RETURNING *;
  `;
  return result.rows[0];
}

export async function getApplications() {
  const result = await pool.sql`
    SELECT * FROM applications ORDER BY created_at DESC;
  `;
  return result.rows;
}
