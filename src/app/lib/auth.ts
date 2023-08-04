import bcrypt from 'bcryptjs';
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../prisma/client";
import { JWT } from "next-auth/jwt";
import { Adapter } from "next-auth/adapters";
import { Account, Profile, User } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Name",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {

        const user = await prisma.user.findUnique({
          where: {
            email: credentials!.email
          }
        });

        if (!user) {
          throw new Error("Email or password is not correct.");
        }

        if (!user.emailVerified) {
          throw new Error("Please verify email before sign in.");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials!.password,
          user.password as string
        );

        if (!isPasswordCorrect) {
          throw new Error("Email or password is not correct.");
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    async jwt({
      token,
      user,
      account,
      profile,
      isNewUser,
    }: {
      token: JWT;
      user?: User | Adapter | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
    }) {

      if (user) {
        token.provider = account?.provider;
      }

      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {

      if (session.user) {
        session.user.provider = token.provider;
      }
      
      return session;
    },
  },
};
