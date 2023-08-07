import { Sejarah, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const response = await prisma.sejarah.findMany({
    select: {
      id: true,
      year: true,
      textarea: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return NextResponse.json(response);
};

export const POST = async (request: Request) => {
  const body: Sejarah = await request.json();

  const response = await prisma.sejarah.create({
    data: {
      id: body.id,
      year: Number(body.year),
      textarea: body.textarea,
    },
  });

  return NextResponse.json(response, { status: 201 });
};
