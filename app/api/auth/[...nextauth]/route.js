import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@utils/database";
import User from "@models/user";
// console.log({
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async session({ session }) {},
  async signIn({ profile }) {
    try {
      //every next.js route is a serverless route.
      //meaning this opens up only when it called,so everytime its called it needs to connect to the server and make connection to the database
      await connectToDB();

      //check if a user already exists
      const userExists = await User.findOne({ email: profile.email });

      //if not create user and save it to db
      if (!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        });
      }

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
