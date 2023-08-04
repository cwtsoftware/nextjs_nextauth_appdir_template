"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

type Props = {}

export function UsernameComponent({}: Props) {

  const { data:session } = useSession()

  return (
    <>
      <p>{session?.user?.name!}</p>
    </>
  )
}

export function UsernamesubstringComponent({}: Props) {

  const { data:session } = useSession()

  return (
    <>
      <p>{session?.user?.name?.substring(0, 20)}</p>
    </>
  )
}
