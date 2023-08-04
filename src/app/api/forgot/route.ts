import { resetPasswordEmail } from "@/emailTemplates/reset";
import { prisma } from "../../../../prisma/client";
import sendMail from "@/utils/sendMail";
import { createResetToken } from "@/utils/tokens";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {

    const req = await request.json()
    const { email } = req;

    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if (!user) {
      return NextResponse.json({ message: "Something went wrong." }, { status: 400 });
    }

    const userId = createResetToken({
      id: user.id.toString(),
    });

    const url = `${process.env.NEXTAUTH_URL}/reset/${userId}`;

    await sendMail(
      email,
      user.name,
      user.image as string,
      url,
      "Reset your password",
      resetPasswordEmail
    );

    return NextResponse.json({ message: "An email has been sent to you, use it to reset your password." }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 500 });
  }
}