import { getReposAndImages } from "@/config/getReposAndImages";
import { NextResponse } from "next/server";

export async function GET() {
  const repos = await getReposAndImages();
  return NextResponse.json(repos);
}
