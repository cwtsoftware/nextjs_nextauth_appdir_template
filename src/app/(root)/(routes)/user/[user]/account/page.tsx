import React from 'react'
import { useQuery } from 'react-query'
import { useReducer } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-hot-toast';
import { z } from "zod";
import { useState } from 'react'
import Link from 'next/link'
import { getUser } from '@/app/lib/user';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import UpdateUserForm from '@/components/forms/user/updateuser.component';

type Props = {}

export default async function AccountPage({}: Props) {

  const session = await getServerSession(authOptions);
  const user = await getUser(session?.user?.email as string);

  return (
    <div className='w-full flex flex-col gap-6'>
      <h1 className='text-4xl font-bold sm:hidden'>Account</h1>
      <div>
        <div className='w-full border-b border-b-gray-500 mb-2'>
          <p className='text-xl font-bold'>Email</p>
        </div>
        <p>{user?.email}</p>
      </div>

      <UpdateUserForm username={user?.name as string} />

      {session?.user?.provider === "credentials" && (
        <div>
          <p className='text-xl font-bold border-b border-b-gray-500 mb-2'>Forgot password?</p>
          <Link href="/forgot" className="text-blue-600">
              Reset password
          </Link>
        </div>
      )}
    </div>
  )
}
