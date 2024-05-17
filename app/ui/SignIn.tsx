// 'use server'
import { signIn } from '@/auth'
import { cookies } from 'next/headers'

export async function SignIn() {
  const cookieStore = cookies()
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <button className="rounded-lg p-2 bg-blue-500" type="submit">
        Sign with Google
      </button>
    </form>
  )
}
