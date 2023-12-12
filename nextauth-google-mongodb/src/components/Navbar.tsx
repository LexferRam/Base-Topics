'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  console.log(session)

  return (
    <nav
      className='bg-slate-900 flex items-center justify-between px-20 py-3 text-white'
    >
      <Link
        href='/'
      >
        <h1>
          NextAuth Google
        </h1>
      </Link>

      {session?.user ? (
        <div className='flex items-center gap-2'>
          <Link
            href='/dashboard'
          >
            dashboard
          </Link>

          <p>{session.user.name} {session.user.email}</p>
          <Image src={session.user.image!} alt='' height={60} width={60} className='w-10 h-10 rounded-full cursor-pointer' />

          <button
            className='bg-sky-400 px-3 py-2 rounded'
            onClick={async() => {
              await signOut({
                callbackUrl: '/'
              })
            }}
          >SignOut</button>

        </div>
      ) : (
        <button
          className='bg-sky-400 px-3 py-2 rounded'
          onClick={() => signIn("google")}
        >SignIn</button>
      )}
    </nav>
  )
}

export default Navbar