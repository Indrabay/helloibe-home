'use client'

import { Center, Card, Button, Field, Stack, Input, Flex, Mark, Text } from '@chakra-ui/react'
import { PasswordInput } from "@/components/ui/password-input"
import React, { useState } from 'react'
import { logIn, AuthState } from '@/redux/features/auth'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useRouter } from 'next/navigation'
import { toaster } from '@/components/ui/toaster'

const page = () => {
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')
  var [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch<AppDispatch>();

  const router = useRouter()

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  async function handleLogin() {
    if (!email || !password) {
      toaster.create({
        title: "Error",
        description: "Please enter both email and password",
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:9999/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })

      if (!response.ok) {
        // Handle non-200 status codes
        const errorData = await response.json().catch(() => ({}))
        const errorMessage = errorData.message || `Login failed with status: ${response.status}`
        
        toaster.create({
          title: "Login Error",
          description: errorMessage,
        })
        return
      }

      const data = await response.json()
      const responseData = data.data

      // Handle successful login
      var storeId = 1
      // TODO: handle for super admin, which have more than 1 store or no store at all
      const payload = {
        token: responseData.token,
        username: responseData.user.username,
        roleID: responseData.user.role.id,
        storeID: storeId
      } as AuthState

      dispatch(logIn(payload))
      
      toaster.create({
        title: "Success",
        description: "Login successful!",
      })

      router.push(`/warung/${storeId}`)

    } catch (error) {
      console.error('Login error:', error)
      toaster.create({
        title: "Connection Error",
        description: "Failed to connect to the server. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
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
            <Button 
              variant="solid" 
              color={'var(--color-primary-background)'} 
              bgColor={'var(--color-primary)'} 
              onClick={handleLogin}
              loading={isLoading}
              loadingText="Logging in..."
            >
              LOGIN
            </Button>
          </Stack>
        </Card.Footer>
      </Card.Root>
    </Center>
  )
}

export default page