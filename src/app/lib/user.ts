import { prisma } from "../../../prisma/client";

export async function getUser(emailQuery:string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: emailQuery
      }
    })

    if(user){
      return { 
        name: user.name, 
        email: user.email, 
        image: user.image, 
        emailVerified: user.emailVerified, 
        role: user.role 
      };
    }
  } catch (error) {
    return { error }
  }
}
