import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const GET = async () => {
  const response = await prisma.vission.findFirst({
    where: {
      id: 1,
    },
  });
  return NextResponse.json(response);
};

export const PATCH = async (request: Request) => {
  const body: Vission = await request.json();
  const response = await prisma.vission.update({
    where: {
      id: 1,
    },
    data: {
      text: body.text,
    },
  });
  return NextResponse.json(response);
};
