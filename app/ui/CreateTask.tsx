'use client'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  IconButton,
  Button,
  Flex,
  Spacer,
  HStack,
  Heading,
  Text,
  Box,
  List,
  ListItem,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useState } from 'react'
import { DeleteTask } from './DeleteTask'

export function CreateTask() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [task, setTask] = useState('')
  const [plan, setPlan] = useState<string[]>([])
  const [time, setTime] = useState<number>(0)
  const [plantime, setPlantime] = useState<number[]>([])

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(Number(e.target.value))
  }
  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleDelete = (index: number) => {
    setPlan((plan) => plan.filter((_, i) => i !== index))
    setPlantime((plantime) => plantime.filter((_, i) => i !== index))
  }

  const handleCreate = () => {
    setPlan([...plan, task])
    setPlantime([...plantime, time])
    setTime(0)
    setTask('')
    onClose()
  }

  const handleEdit = () => {}

  // useState<string[]> = useState + <string[]>
  // <string[]> = data type: string & It is an array
  // useState<string[]>([])
  // ([]) is similar to boolean True/False,
  // it means the initial state is an empty array

  return (
    <>
      <Button onClick={onOpen} leftIcon={<AddIcon />} colorScheme="blue">
        Add New Plan
      </Button>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Plan Name</FormLabel>
              <Stack spacing={3}>
                <Input
                  placeholder="ex: Frontend Project in 2 Months"
                  value={task}
                  onChange={handleTaskChange}
                />
                <Text>The Expected Time</Text>
                <Input
                  placeholder="how long"
                  value={time}
                  onChange={handleTimeChange}
                />
              </Stack>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreate}>
              Create
            </Button>
            <Button colorScheme="red" onClick={onClose} variant="ghost">
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Box mt={4}>
        <List spacing={3}>
          {plan.map((p, index) => {
            const time = plantime[index]
            return (
              <ListItem key={index}>
                <Card>
                  <CardBody>
                    <HStack spacing={3}>
                      <Stack spacing={2}>
                        <Heading as="h4" size="md">
                          Plan Name {index + 1}
                        </Heading>
                        <Text>{p}</Text>
                      </Stack>
                      <Stack spacing={2}>
                        {' '}
                        <Heading as="h4" size="md">
                          Expected Time
                        </Heading>
                        <Text>{time} hours</Text>
                      </Stack>
                    </HStack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    {' '}
                    <Flex minWidth="max-content" alignItems="center" gap="2">
                      <IconButton
                        aria-label="Edit Plan"
                        icon={<EditIcon />}
                        onClick={() => handleDelete(index)}
                        colorScheme="green"
                      />
                      <Spacer />
                      <IconButton
                        aria-label="Delete Plan"
                        icon={<DeleteIcon />}
                        onClick={() => handleDelete(index)}
                        colorScheme="red"
                      />
                    </Flex>
                  </CardFooter>
                </Card>
              </ListItem>
            )
          })}
        </List>
      </Box>
    </>
  )
}
