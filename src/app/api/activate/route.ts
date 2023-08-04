import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { prisma } from "../../../../prisma/client";
import jwt from "jsonwebtoken";

const { ACTIVATION_TOKEN_SECRET } = process.env;

interface UserToken {
  id: string;
}

export async function PUT(request: NextRequest){

  try {
    
    const req = await request.json()
    const { token } = req;
    
    const userToken = jwt.verify(token, ACTIVATION_TOKEN_SECRET!) as UserToken;
  
    const userDb = await prisma.user.findUnique({
      where: {
        id: userToken.id
      }
    })
  
    if (!userDb) {
      return NextResponse.json({ message: "This account no longer exist." }, { status: 400 });
    }
  
    if(userDb.emailVerified){
      return NextResponse.json({ message: "Email address already verified." }, { status: 400 })
    }
  
    await prisma.user.update({
      data: {
        emailVerified: new Date()
      },
      where: {
        id: userDb.id
      }
    })
  
    return NextResponse.json({ message: "Your account has beeen successfully verified." }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 })
  }
}