import { Tupoksi, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const response = await prisma.tupoksi.findMany({
    select: {
      id: true,
      title: true,
      textarea: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return NextResponse.json(response);
};

// export const POST = async (request: Request) => {
//   const body: Tupoksi = await request.json();

//   const response = await prisma.tupoksi.create({
//     data: {
//       id: body.id,
//       title: body.title,
//       textarea: body.textarea,
//     },
//   });

//   return NextResponse.json(response, { status: 201 });
// };
