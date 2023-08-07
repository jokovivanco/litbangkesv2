import { PrismaClient, Sejarah } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Sejarah = await request.json();
  const response = await prisma.sejarah.update({
    where: { id: params.id },
    data: {
      textarea: body.textarea,
      year: Number(body.year),
    },
  });
  return NextResponse.json(response);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const response = await prisma.sejarah.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(response);
};
