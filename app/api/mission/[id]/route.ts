import { PrismaClient, Mission } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body: Mission = await request.json();
  const response = await prisma.mission.update({
    where: { id: params.id },
    data: {
      text: body.text,
      vissionId: 1,
    },
  });
  return NextResponse.json(response);
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const response = await prisma.mission.delete({
    where: {
      id: params.id,
    },
  });
  return NextResponse.json(response);
};
