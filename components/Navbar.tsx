'use client'

import {
  Box,
  Container,
  Text,
  Link,
  Mark,
  Menu,
  Button,
  Portal
} from '@chakra-ui/react'

import { RxHamburgerMenu } from "react-icons/rx";

import React from 'react'

const Navbar = () => {
  return (
    <Box
      position={'fixed'}
      as="nav"
      bgColor={'var(--color-primary-background)'}
      w="100%"
      maxW={'768px'}
      paddingTop='40px'
      left={'50%'}
      transform={'translate(-50%, -50%)'}
      zIndex={1}
    >
      <Container
        display='flex'
        justifyContent='space-between'
      >
        <Link
          href="#"
          color={'white'}
          textTransform={'uppercase'}
          _hover={{
            textDecor: 'none',
            color: 'var(--color-primary)'
          }}>
          <Text>
            <Mark
              color={'var(--color-primary)'}
            >{'{'}
            </Mark>
            helloibe
            <Mark
              color={'var(--color-primary)'}
            >{'}'}
            </Mark>
          </Text>
        </Link>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button bg={'transparent'} color='white' _hover={{ color: 'var(--color-primary)' }}>
              <RxHamburgerMenu />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value='underline' bg={'transparent'}>
                  <Link
                    href='#'
                  >home</Link>
                </Menu.Item>
                <Menu.Item value='menu2' bg={'transparent'}>
                   <Link
                    href='#'
                  >login</Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Container>
    </Box>
  )
}

export default Navbar