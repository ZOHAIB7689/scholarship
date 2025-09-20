import { NextResponse } from "next/server";
import { addApplication } from "@/lib/db";
export async function POST(req: Request) {
  try {
    const { name, email, program } = await req.json();

    if (!name || !email || !program) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    await addApplication(name, email, program);

    return NextResponse.json({ success: true, message: "Application submitted successfully. Our admin will contact you soon." });
  } catch (error) {
    console.error("Error saving application:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
