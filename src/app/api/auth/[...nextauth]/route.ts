import { prisma } from "@/lib/prisma";
import NextAuth from "next-auth";
import * as bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findFirst({
            where: {
              email: credentials?.username,
            },
          });
          
          if (user) {
            const passwordCorrect = await bcrypt.compare(
              credentials?.password as string,
              user.password
            );
            if (passwordCorrect) {
              return user;
            }
            // Any object returned will be saved in `user` property of the JWT
            return null;
          }

          return null;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
