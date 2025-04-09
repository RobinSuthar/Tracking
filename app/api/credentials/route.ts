import { PrismaClient } from "@/app/generated/prisma";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const providedUsername = await req.json();
    const correctUser = await prisma.user.findFirstOrThrow({
      where: {
        name: providedUsername.username,
      },
    });

    if (!correctUser) {
      return NextResponse.json({
        message: "Bro who the hell is this ?",
      });
    }

    if (!correctUser.password == providedUsername.password) {
      return NextResponse.json({
        message: "Bro who the hell is this ? who are giving wrong password",
      });
    }

    return NextResponse.json({
      message: correctUser,
    });
  } catch (e) {
    return NextResponse.json({
      message: "Bro who the hell is this ? who are " + { e },
    });
  }
}
