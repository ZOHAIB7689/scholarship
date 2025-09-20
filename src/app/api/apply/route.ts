import { NextResponse } from "next/server";
import { addApplication } from "../../../lib/applications";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // validation
    if (!body.name || !body.email || !body.program) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const application = {
      id: crypto.randomUUID(),
      name: body.name,
      email: body.email,
      program: body.program,
      createdAt: new Date().toISOString(),
    };

    await addApplication(application);

    return NextResponse.json(
      { message: "Your application has been submitted successfully. Our admissions team will review it and contact you shortly", application },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
