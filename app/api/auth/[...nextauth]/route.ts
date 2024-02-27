import User from "@/models/User";
import { connectToDB } from "@/utils/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });

      session.user.id = sessionUser!._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToDB();

        const userExists = await User.findOne({ email: profile?.email });
        const name = profile?.name;
        // if not, create user
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: name?.replace(" ", "").toLowerCase(),
            image: (profile as any)?.avatar_url,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
