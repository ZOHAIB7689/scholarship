// src/app/api/db-test/route.ts
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function GET() {
  try {
    const r = await sql`SELECT NOW() as time;`;
    return NextResponse.json({ ok: true, time: r.rows[0].time });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
