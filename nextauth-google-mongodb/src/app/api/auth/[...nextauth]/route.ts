import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            // console.log("User: " + JSON.stringify(user))
            // console.log("Account: " + JSON.stringify(account))

            if (account?.provider === 'google') {
                const { name, email } = user;

                try {
                    await connectMongoDB()
                    const userExists = await User.findOne({ email })

                    if (!userExists) {
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: 'POST',
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                name, email
                            })
                        })

                        if (res.ok) {
                            return user
                        }
                    }

                } catch (error) {
                    console.log(error)
                }
            }
            return user
        },
    }
})

export { handler as GET, handler as POST }