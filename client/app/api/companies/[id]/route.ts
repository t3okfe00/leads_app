import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const asd = params.id;

  return NextResponse.json({
    company_id: asd,
    name: "Company Name",
  });
}
