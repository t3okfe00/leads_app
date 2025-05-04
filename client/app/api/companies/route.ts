import { NextResponse } from "next/server";

export async function GET() {
  console.log("Incoming requesT? ");
  return NextResponse.json({
    message: "Hello from the API route!",
  });
}
