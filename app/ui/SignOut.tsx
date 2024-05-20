'use client'
import { Icon } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import { leave } from '../lib/leave'
const handleSignOut = async () => {
  await signOut({ callbackUrl: '/' })
}
export async function SignOut() {
  return (
    <button
      onClick={() => {
        handleSignOut()
      }}
    // className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
    >
      <div className="hidden md:block font-bold">Sign Out</div>
      <div className="block md:hidden">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
          />
        </svg>
      </div>
    </button>
  )
}
