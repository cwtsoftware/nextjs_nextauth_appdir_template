import { prisma } from "../../../../prisma/client";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

const { RESET_TOKEN_SECRET } = process.env;

interface UserToken {
  id: string;
}

export async function POST(request: NextRequest) {
  try {

    const req = await request.json()
    const { token, password } = req;

    const userToken = jwt.verify(token, RESET_TOKEN_SECRET!) as UserToken;

    const userDb = await prisma.user.findUnique({
      where: {
        id: userToken.id
      }
    });

    if (!userDb) {
      return NextResponse.json({ message: "This account no longer exist." }, { status: 400 });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    await prisma.user.update({
      data: {
        password: cryptedPassword
      },
      where: {
        id: userToken.id
      }
    })

    return NextResponse.json({message: "Your account password has beeen successfully updated." }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}
