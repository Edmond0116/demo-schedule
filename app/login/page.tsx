// import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';
// 'use client'
import { SignIn } from '../ui/SignIn'
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="bg-blue-300 relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <SignIn />
      </div>
    </main>
  )
}
