# NextAuth with Google

1. Install nextAuth

```cmd
npm i next-auth
```

2. crear: app/api/auth/[...nextauth]/route.ts

```ts
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]
})

export { handler as GET, handler as POST }
```

3. Crear las varaibles de entorno

 * process.env.GOOGLE_CLIENT_ID
 * process.env.GOOGLE_CLIENT_SECRET

 - Ir a nextauth google
 - Ir al link de configuracion <https://console.cloud.google.com/apis/credentials>
 - Crear un project
 - Create credential > create Oauth client ID
 - create a consent screen > select extern users > go to dashboard
 - Create credential > create Oauth client ID
 - add Orígenes autorizados de JavaScript (dominio)
 - add URI de redireccionamiento autorizados:

    **For production**: https://{YOUR_DOMAIN}/api/auth/callback/google

    **For development**: http://localhost:3000/api/auth/callback/google

4. Add the sigin button and import  signIn from 'next/link'

NOTE: useSession to use the data of the user

```jsx
'use client'
import { signIn, useSession } from 'next-auth/react'

const Navbar = () => {

  const {data: session} = useSession()
  console.log(session)

  return (
    <>
        <button
          className='bg-sky-400 px-3 py-2 rounded'
          onClick={() => signIn()}
        >
            SignIn
        </button>
    </>
  )
}

export default Navbar
```

5. Use The SessionProvider from next-auth and use this in the **layout**:

```ts
'use client'

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default Providers
```

6. Create middleware.ts file to protect routes in '/dashboard/**':

**Middleware docs**: <https://next-auth.js.org/tutorials/securing-pages-and-api-routes>

```ts
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard/:path*"] }
```

7. In the next.config.js add the domain of the google image:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com']
    }
}

module.exports = nextConfig
```

8. Deployment

DOCS: <https://next-auth.js.org/deployment>

- NextAuth.js environment variables

NEXTAUTH_SECRET
NEXTAUTH_URL

- NextAuth.js API Route and its configuration (/app/api/auth/[...nextauth].js).

OAuth Provider clientId / clientSecret
Deploying a modern JavaScript application using NextAuth.js consists of making sure your environment variables are set correctly as well as the configuration in the NextAuth.js API route is setup, as well as any configuration (like Callback URLs, etc.) are correctly done in your OAuth provider(s) themselves.

See below for more detailed provider settings.

## Adding MongoDB Atlas.

1. CREAR EL PROYECTO EN MONGODB Atlas y copiar la URI de la DB creada

Crear la variable de entorno con esta url:

MONGODB_URI=mongodb+srv://lexferramirez:<password>@cluster0.5xv1zo3.mongodb.net/

2. crear carpeta lib/mongodb.ts

    - Instalar mongoose

```ts
import mongoose from 'mongoose'

export const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connected')
    }catch(error){
        console.log('Error connecting to MongoDB: '+ error)
    }
}
```

3. Crear Models: app/models/user.ts

```ts
import mongoose, { Schema, models } from 'mongoose'

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

const User = models.User || mongoose.model('User', userSchema);
export default User;
```

4. Crear el API para agregar el usuario.

api/user/route.ts

```ts
import { connectMongoDB } from "@/lib/mongodb"
import User from "@/models/user"
import { NextApiRequest } from "next"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const { name, email } = await request.json()
    await connectMongoDB()

    await User.create({name, email})
    return NextResponse.json({message:"User Register"}, {status: 201})
}
```

**NOTA: probar el API : http://localhost:3000/api/user [POST]

5. Guardar el user cuando se autentica con Google agregando la prop callbacks 

```ts
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
```

**EXAMPLE OF .ENV**

```markdown
GOOGLE_CLIENT_ID=542423455749-l4nfvajedhuovsduod5kfk7gfid67u28.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=7f88339ca91a70e715af3ab538fe0b00

MONGODB_URI=mongodb+srv://lexferramirez:9XKq7yKLWUUpnrSK@cluster0.5xv1zo3.mongodb.net/
```