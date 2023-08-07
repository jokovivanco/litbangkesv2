import { Mission, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const response = await prisma.mission.findMany({
    select: {
      id: true,
      text: true,
      vissionId: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return NextResponse.json(response);
};

export const POST = async (request: Request) => {
  const body: Mission = await request.json();

  const response = await prisma.mission.create({
    data: {
      id: body.id,
      text: body.text,
      vissionId: 1,
    },
  });

  return NextResponse.json(response, { status: 201 });
};
