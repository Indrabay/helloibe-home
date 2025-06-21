'use client'

import { Center, Container, Mark, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

const Hero = () => {
  return (
    <Container width={'full'} zIndex={'9'} pb={'150px'}>
      <Center>
        <Stack hideBelow={'md'} direction={'column'} justifyContent={'space-between'}>
          <Stack direction={'row'}>
            <Stack direction={'column'} justifyContent={'center'}>
              <Text textTransform={'uppercase'} textStyle={{ lg: '4xl', md: '3xl', sm: '2xl' }}><Mark color={'var(--color-primary)'}>{'>'}</Mark> Hello, ibe is <Mark color={'var(--color-primary)'}>me</Mark></Text>
              <Text>Software Engineer | Backend Devs | Interested in Web Development</Text>
            </Stack>
            <Image
              src={'/cropped_ibe.png'}
              alt='ibe'
              boxSize={'150px'}
              borderRadius={'full'}
              border={'solid'}
              fit={'cover'}
            ></Image>
          </Stack>
        </Stack>
        <Stack hideFrom={'md'} direction={'column'} gap={'20px'}>
          <Center>
            <Stack direction={'column'}>
              <Center>
                <Text textTransform='uppercase' color={'white'} textStyle={{ lg: '5xl', md: '4xl', sm: '2xl', smDown: '2xl' }}><Mark color={'var(--color-primary)'}>{'>'}</Mark> Hello, ibe is <Mark color={'var(--color-primary)'}>me</Mark></Text>
              </Center>
              <Text color={'white'}>Software Engineer | Backend Developer | Interested in Web Development</Text>
            </Stack>
          </Center>
          <Center>
            <Image
              src={'/cropped_ibe.png'}
              alt='ibe'
              boxSize={'150px'}
              borderRadius={'full'}
              border={'solid white'}
              fit={'cover'}
            ></Image>
          </Center>
        </Stack>
      </Center>
    </Container>
  )
}

export default Hero