'use client'

import { Container, Flex, Group, Text, HStack, Link, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


const Footer = () => {
  return (
    <Container >
      <Flex
      hideBelow={'md'}
      direction={'row'}
      justifyContent={'space-between'}
      >
        <Text textStyle={'sm'} pt={'5px'} color={'white'}>&copy; 2025 helloibe.com. All rights reserved.</Text>
        <Group>
          <HStack>
            <Link href='https://www.instagram.com/helloibe.me' color={'white'}><FaInstagram/></Link>
            <Link href='https://github.com/Indrabay' color={'white'}><FaGithub/></Link>
            <Link href='https://www.linkedin.com/in/indrabay/' color={'white'}><FaLinkedin/></Link>
            <Link href='https://x.com/ibexoxo' color={'white'}><BsTwitterX/></Link>
          </HStack>
        </Group>
      </Flex>
      <VStack
      hideFrom={'md'}
      justifyContent={'center'}
      pb='20px'
      >
        <Text textStyle={'sm'} pt={'5px'} color={'white'}>&copy; 2025 helloibe.com. All rights reserved.</Text>
        <Group>
          <HStack>
            <Link href='https://www.instagram.com/helloibe.me' color={'white'}><FaInstagram/></Link>
            <Link href='https://github.com/Indrabay' color={'white'}><FaGithub/></Link>
            <Link href='https://www.linkedin.com/in/indrabay/' color={'white'}><FaLinkedin/></Link>
            <Link href='https://x.com/ibexoxo' color={'white'}><BsTwitterX/></Link>
          </HStack>
        </Group>
      </VStack>
    </Container>
  )
}

export default Footer