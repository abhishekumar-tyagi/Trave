import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"
import { JWT } from "next-auth/jwt"

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
			authorization: {
				params: {
				  prompt: "consent",
				  access_type: "offline",
				  response_type: "code"
				}
			}
		}),
	],
	session: {
		strategy: "jwt",
		
	},
	jwt: {
		// The maximum age of the NextAuth.js issued JWT in seconds.
		// Defaults to `session.maxAge`.
		maxAge: 60 * 60 * 24 * 30,
		// You can define your own encode/decode functions for signing and encryption
		
	},
	secret: process.env.NEXTAUTH_SECRET,
})

