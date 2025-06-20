'use client'

import { Center, Card, Button, Field, Stack, Input, Flex, Mark, Text } from '@chakra-ui/react'
import { PasswordInput } from "@/components/ui/password-input"
import { login } from "@/lib/login"
import React, { useState } from 'react'
import { logIn, AuthState } from '@/redux/features/auth'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { redirect } from 'next/navigation'

const page = () => {
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')

  const dispatch = useDispatch<AppDispatch>();

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  async function handleLogin() {
    await login(email, password).then(res => {
      console.log(res)
    })
  }
  return (
    <Center maxW={'container.md'} h='full'>
      <Card.Root maxW="sm" minW={'400px'} bg={'transparent'} border={'none'}>
        <Card.Header>
          <Card.Title textTransform='uppercase' pb='100px' textAlign='center' textStyle={'4xl'}><Mark color={'var(--color-primary)'}>{'{'}</Mark> helloibe <Mark color={'var(--color-primary)'}>{'}'}</Mark></Card.Title>
          <Text textStyle={'3xl'} textAlign={'center'} textTransform={'uppercase'}>Login</Text>
        </Card.Header>
        <Card.Body>
          <Stack gap="4" w="full">
            <Field.Root>
              <Input placeholder='email' opacity={'50%'} border={'solid white'} onChange={handleEmailInput} />
            </Field.Root>
            <Field.Root>
              <PasswordInput placeholder='password' opacity={'50%'} border={'solid white'} onChange={handlePasswordInput} />
            </Field.Root>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Stack w={'full'}>
            <Button variant="solid" color={'var(--color-primary-background)'} bgColor={'var(--color-primary)'} onClick={handleLogin}>LOGIN</Button>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Center>
  )
}

export default page