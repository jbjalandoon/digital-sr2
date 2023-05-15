import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RequestBody {
  email: string;
  password: string;
  firstName: string;
  middleName: string;
  lastName: string;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
        userInformation: {
          create: {
            firstName: body.firstName,
            lastName: body.lastName,
            middleName: body.middleName,
          },
        },
      },
    });

    const { password, ...result } = user;
    return new Response(JSON.stringify(result));
  } catch (error) {
    return NextResponse.json({
      msg: "Something went wrong",
    });
  }
}
