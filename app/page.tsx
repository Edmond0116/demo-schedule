'use client'
// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
// import { lusitana }  from '@/app/ui/fonts';
// import Image from 'next/image'
import { ArrowForwardIcon } from '@chakra-ui/icons'
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />

          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Elmon's Product.</strong>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            <ArrowForwardIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  )
}

// 'use client'
// // import Image from 'next/image'
// import Nav from './ui/nav'
// import Burger from './ui/burger'
// import { Center, ChakraProvider, Divider } from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
// import { Button } from '@chakra-ui/react'
// import { Image, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react'
// import { SignIn } from './ui/sign-in'

// // 2. Call `extendTheme` and pass your custom values

// export default function Home() {
//   return (
//     // <main className="flex min-h-screen flex-col items-center justify-between p-6">
//     <main className="flex min-h-screen flex-rol">
//       <div className="w-1/8 sm:w-1/6 md:w-1/4">
//         <Nav />
//       </div>
//       <div
//         id="g_id_onload"
//         data-client_id="696926247498-oroon8q33sc74q6v011539qrjn2u47or.apps.googleusercontent.com"
//         data-context="signin"
//         data-ux_mode="popup"
//         data-login_uri="localhost:3000/login"
//         data-auto_select="true"
//         data-itp_support="true"
//       ></div>

//       <div
//         className="g_id_signin"
//         data-type="standard"
//         data-shape="rectangular"
//         data-theme="outline"
//         data-text="signin_with"
//         data-size="large"
//         data-logo_alignment="left"
//       ></div>
//       <div className="flex flex-col items-start w-7/8 sm:w-5/6 md:w-3/4 p-6 overflow-y-scroll">
//         <div className="sm:p-2 md:p-2 lg:p-4">
//           <h1 className="text-orange-400 w-fit h-fit z-0 text-sm sm:text-sm md:text-base lg:text-2xl">
//             Who am I?
//           </h1>
//         </div>
//         <div>
//           <div className="text-base/6 text-sm sm:text-sm md:text-base lg:text-lg  p-4 w-fit h-fit z-10">
//             <ul className="list-disc list-inside">
//               <li>Complete 2 revenue-related projects:</li>
//               <div className="p-4">
//                 <ul className="list-disc list-inside">
//                   <li>
//                     Launch subscription service, achieving 2500 users
//                     subscribing within three months from 0.
//                   </li>
//                   <li>
//                     Launch subscription service, achieving 2500 users
//                     subscribing within three months from 0.
//                   </li>
//                 </ul>
//               </div>
//             </ul>
//           </div>
//         </div>
//         <ChakraProvider>
//           <div className="p-4 md-flex ">
//             <h1 className="text-orange-400 sm:text-sm md:text-base lg:text-2xl w-fit h-fit z-0">
//               Who am I?
//             </h1>
//           </div>
//           <SimpleGrid
//             spacing={4}
//             templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
//           >
//             <Card className="items-end w-full md:w-auto">
//               <CardBody>
//                 <div
//                   style={{
//                     display: 'flex',
//                     justifyContent: 'left',
//                   }}
//                 >
//                   <Image
//                     src="/IMG_1153.png"
//                     alt="Tokyo Tower at night"
//                     className="place-items-center"
//                     width={150}
//                     height={150}
//                     borderRadius="lg"
//                   />
//                 </div>
//                 <Stack mt="6" spacing="3">
//                   <Heading size="md">Living room Sofa</Heading>
//                   <Text className="text-base/6 sm:text-sm md:text-lg lg:text-base">
//                     This sofa is perfect for modern tropical spaces, baroque
//                     inspired spaces, earthy toned spaces and for people who love
//                     a chic design with a sprinkle of vintage design.
//                   </Text>
//                 </Stack>
//               </CardBody>
//               <CardFooter>
//                 <Button
//                   className="absolute inset-y-0 right-0"
//                   variant="solid"
//                   colorScheme="blue"
//                 >
//                   Read more...
//                 </Button>
//               </CardFooter>
//             </Card>
//           </SimpleGrid>
//         </ChakraProvider>
//       </div>
//     </main>
//   )
// }
