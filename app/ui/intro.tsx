'use client'

import { Center, ChakraProvider, Divider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Image, Stack, Text, Heading, SimpleGrid } from '@chakra-ui/react'

export function Intro() {
  return (
    <ChakraProvider>
      <div className="p-4 md-flex ">
        <h1 className="text-orange-400 sm:text-sm md:text-base lg:text-2xl w-fit h-fit z-0">
          Who am I?
        </h1>
      </div>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Card className="items-end w-full md:w-auto">
          <CardBody>
            <div
              style={{
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              <Image
                src="/IMG_1153.png"
                alt="Tokyo Tower at night"
                className="place-items-center"
                width={150}
                height={150}
                borderRadius="lg"
              />
            </div>
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <Text className="text-base/6 sm:text-sm md:text-lg lg:text-base">
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button
              className="absolute inset-y-0 right-0"
              variant="solid"
              colorScheme="blue"
            >
              Read more...
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </ChakraProvider>
  )
}
