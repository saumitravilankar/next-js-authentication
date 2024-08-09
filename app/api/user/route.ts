import { AuthOption } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(AuthOption);

  return NextResponse.json({
    name: session.user.name,
    id: session.user.id,
  });
}
