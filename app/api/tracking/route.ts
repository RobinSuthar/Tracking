import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  const tracks = await prisma.tracks.create({
    data: {
      title: body.data.title,
      description: body.data.description,
      date: new Date(),
    },
  });

  console.log(tracks);

  return NextResponse.json({
    message: tracks,
  });
}

export async function GET() {
  try {
    const tracks = await prisma.tracks.findMany();
    console.log(tracks);

    return NextResponse.json({
      message: tracks,
    });
  } catch (e) {
    NextResponse.json({
      message: e,
    });
  }
}
