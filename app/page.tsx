// import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';
// 'use client'
import { SignIn } from './ui/SignIn'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
export default function Page() {
  return (
    <main className="flex flex-col md:flex-row md:h-full">
      <div className="w-full md:w-1/3">
        <div className="bg-black relative h-screen flex items-center justify-center flex-col space-y-2.5 ">
          <Image
            boxSize="50px"
            className="object-contain "
            src="icon.png"
            alt="Planning"
          />
          <div className="flex flex-col justify-center">
            <Text
              className="pt-8 text-center w-full max-w-[500px] text-3xl "
              as="b"
              color="white"
            >
              Welcome back
            </Text>
          </div>
          <div className="p-4">
            <SignIn />
          </div>
        </div>
      </div>
      <div className="w-full md:w-2/3"></div>
    </main>
  )
}
