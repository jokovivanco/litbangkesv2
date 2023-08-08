import { PrismaClient, Tupoksi } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Tupoksi = await request.json();
  const response = await prisma.tupoksi.update({
    where: { id: params.id },
    data: {
      title: body.title,
      textarea: body.textarea,
    },
  });
  return NextResponse.json(response);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const response = await prisma.tupoksi.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(response);
};
