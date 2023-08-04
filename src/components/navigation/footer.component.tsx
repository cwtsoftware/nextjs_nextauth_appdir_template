'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

type Props = {}

export default function Footer({}: Props) {

  const { data:session } = useSession()

  return (
    <div className='bg-navBar z-40 flex flex-col justify-center text-nav-focus md:fixed absolute bottom-0 w-full px-6 py-2 pt-4 md:pt-2 md:py-2'>
      <div className='w-full flex justify-around md:justify-between'>
        <div className='flex flex-col sm:flex-row gap-6 justify-center md:justify-start'>
          <Link href={`/user/${session?.user?.name}/faq`}>
            FAQ
          </Link>
          <Link href={`/user/${session?.user?.name}/feedback`}>
            Feedback
          </Link>
        </div>
        <div className='flex flex-col sm:flex-row gap-6'>
          <p className='hidden md:block'>© 2023 Combined Web Technologies</p>
          <Link href={`/legal/cookies`} >
            Cookies
          </Link>
          <Link href={`/legal/terms-of-service`} >
            Terms
          </Link>
          <Link href={`/legal/privacy-policy`} >
            Privacy Policy
          </Link>
        </div>
      </div>
      <p className='md:hidden text-center mt-4'>© 2023 Combined Web Technologies</p>
    </div>
  )
}