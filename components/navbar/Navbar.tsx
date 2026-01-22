// Chakra Imports
import { Box, Breadcrumb, Portal, CloseButton, Button, Drawer, Flex, Icon, Link, Text, Stack } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { IoMenuOutline } from 'react-icons/io5';

export default function Navbar(props: any) {
  return (
    <Box
      position='fixed'
      bg='rgba(11,20,55,0.5)'
      borderColor='transparent'
      filter='none'
      backdropFilter='blur(20px)'
      backgroundPosition='center'
      backgroundSize='cover'
      borderRadius='16px'
      borderWidth='1.5px'
      borderStyle='solid'
      transitionDelay='0s, 0s, 0s, 0s'
      transitionDuration=' 0.25s, 0.25s, 0.25s, 0s'
      transition-property='box-shadow, background-color, filter, border'
      transitionTimingFunction='linear, linear, linear, linear'
      alignItems={{ xl: 'center' }}
      minH='75px'
      justifyContent={{ xl: 'center' }}
      lineHeight='25.6px'
      mx='auto'
      pb='8px'
      left={{ sm: '2px', lg: '300px' }}
      right={{ base: '12px', md: '30px', lg: '30px', xl: '30px' }}
      px={{
        sm: '15px',
        md: '10px'
      }}
      ps={{
        xl: '12px'
      }}
      pt='8px'
      top={{ base: '12px', md: '16px', lg: '20px', xl: '20px' }}
      w={{
        base: 'calc(100vw - 6%)',
        md: 'calc(100vw - 8%)',
        lg: 'calc(90vw - 190px)',
        xl: 'calc(100vw - 350px)',
        '2xl': 'calc(100vw - 365px)'
      }}
    >
      <Flex
        w='100%'
        flexDirection='row'
        alignItems={{
          xl: 'center'
        }}
        justifyContent='space-between'
        gap='10px'
      >
        <Box mb={{ sm: '8px', md: '0px' }}>
          <Breadcrumb.Root>
            <Breadcrumb.List>
              <Breadcrumb.Item>
                <Breadcrumb.Link href='#'>
                  <Text>Home</Text>
                </Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
              <Breadcrumb.Item>
                <Breadcrumb.Link href='#'>
                  <Text>Breadcrumb</Text>
                </Breadcrumb.Link>
              </Breadcrumb.Item>
            </Breadcrumb.List>
          </Breadcrumb.Root>
          <Link
            color='white'
            href='#'
            bg='inherit'
            borderRadius='inherit'
            fontWeight='bold'
            fontSize='34px'
            _hover={{ color: 'white', textDecoration: 'none' }}
            _active={{
              bg: 'inherit',
              transform: 'none',
              borderColor: 'transparent'
            }}
            _focus={{
              boxShadow: 'none'
            }}>
            Dashboard
          </Link>
        </Box>
        <Box display={{ sm: 'flex', lg: 'none' }}>
          <Flex
            w={{ sm: '100%', md: 'auto' }}
            alignItems='center'
            justifyContent='flex-end'
            direction='row'
            bg='inherit'
            pt='15px'
            pb='15px'
            borderRadius='30px'
          >
            <Flex
              display={{ sm: 'flex', xl: 'none' }}
              alignItems='center'
            >
              <Drawer.Root>
                <Drawer.Trigger asChild>
                  <Button
                    bg='transparent'
                  >
                    <Icon
                      as={IoMenuOutline}
                      color='white'
                      my='auto'
                      w='20px'
                      h='20px'
                      me='10px'
                      _hover={{ cursor: "pointer" }}
                    />
                  </Button>
                </Drawer.Trigger>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content>
                      <Drawer.Header>
                        <Drawer.Title>hellowarung</Drawer.Title>
                      </Drawer.Header>
                      <Drawer.Body>
                        <Stack>
                          <Link href='/test-view'>Dashboard</Link>
                          <Link href='/test-upload'>Produk</Link>
                          <Link href='/scan'>Scanner</Link>
                        </Stack>
                      </Drawer.Body>
                      <Drawer.Footer>
                        <Button variant="outline">Cancel</Button>
                        <Button>Save</Button>
                      </Drawer.Footer>
                      <Drawer.CloseTrigger asChild>
                        <CloseButton size="sm" />
                      </Drawer.CloseTrigger>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
