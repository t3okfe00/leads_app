import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { CompanyApiResponse } from "@/types/types";

export async function GET(req: NextRequest){
  const { searchParams } = new URL(req.url);
  const query =searchParams.get("query");

  const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const BASE_URL = process.env.GOOGLE_PLACES_TEXTSEARCH_BASE_URL;

  if (!query) {
    return NextResponse.json(
      { error_message: "Missing query parameter" },
      { status: 400 }
    );
  }
  try {
    const response = await axios.get(BASE_URL as string, {
      params: {
        query: query || "",
        key: GOOGLE_API_KEY,
      },
    });
    // even if API key is wrong- google places api will return a response
    // with data object with error_message property
   
    return NextResponse.json(response.data);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to fetch places" },
      { status: 500 }
    );
  }
}
