import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const tracks = await prisma.tracks.create({
    data: {
      title: body.title,
      description: body.description,
      date: new Date(),
    },
  });

  console.log(tracks);

  return NextResponse.json({
    message: tracks,
  });
}

export async function GET() {
  const tracks = await prisma.tracks.findMany();
  console.log(tracks);

  return NextResponse.json({
    message: tracks,
  });
}
