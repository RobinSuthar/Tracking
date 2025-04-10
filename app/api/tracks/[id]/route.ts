import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma";

const prisma = new PrismaClient();

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // 'a', 'b', or 'c'
  const providedId = parseInt(id);
  const user = await prisma.tracks.findFirst({
    where: {
      id: providedId,
    },
  });
  return NextResponse.json({
    message: user,
  });
}
