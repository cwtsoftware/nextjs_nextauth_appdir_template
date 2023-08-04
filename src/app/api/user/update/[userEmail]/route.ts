import { NextResponse } from "next/server";
import { prisma } from "../../../../../../prisma/client";

export async function POST(req: Request, {params}:{params:{userEmail:string}}){

  try {
    
    const body = await req.json()
    const { name } = body.values;

    if(!name){
      return NextResponse.json({message: "Missing required fields"}, {status:400})
    }

    await prisma.user.update({
      data: {
        name: name
      },
      where: {
        email: params.userEmail
      }
    })

    return NextResponse.json({message: "Username Successfully updated!"}, {status:200})

  } catch (error) {
    return NextResponse.json({message: "Internal error"}, {status: 500})
  }
}
