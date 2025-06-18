import { Card, Container, HStack, Image, LinkBox, LinkOverlay, Group, Button, Heading, Mark } from '@chakra-ui/react'
import React from 'react'

const Porfolio = () => {
  return (
    <Container pb={'100px'}>
      <Heading
        as={'h2'}
        fontFamily={'"Fira Code", monospace !important'}
        fontWeight={'medium'}
        textTransform={'uppercase'}
        textDecor={'underline var(--color-primary)'}
        pb={'20px'}
        hideFrom={'md'}
        color='white'
      ><Mark color={'var(--color-primary)'}>{'>'}</Mark> my little experiments</Heading>
      <Heading
        as={'h2'}
        fontFamily={'"Fira Code", monospace !important'}
        fontWeight={'medium'}
        textTransform={'uppercase'}
        pb={'20px'}
        hideBelow={'md'}
      ><Mark color={'var(--color-primary)'}>{'>'}</Mark> my little experiments</Heading>
      <HStack overflow={'auto'} hideBelow={'md'}>
        <Group>
          <LinkBox>
            <Card.Root maxW={'md'} minW={'250px'} overflow={'hidden'} borderColor={'var(--color-primary)'}>
              <Image
                src={'/helloibe.png'}
              ></Image>
              <Card.Body gap='2'>
                <Card.Title>
                  <LinkOverlay href='https://www.helloibe.com'>helloibe.com 2025</LinkOverlay>
                </Card.Title>
                <Card.Description>
                  This website is landing page for all helloibe related experiments.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </LinkBox>
          <LinkBox>
            <Card.Root maxW={'md'} minW={'250px'} overflow={'hidden'} borderColor={'var(--color-primary)'}>
              <Image
                src={'/helloibe.png'}
              ></Image>
              <Card.Body gap='2'>
                <Card.Title>
                  <LinkOverlay href='https://www.helloibe.com'>helloibe.com 2025</LinkOverlay>
                </Card.Title>
                <Card.Description>
                  This website is landing page for all helloibe related experiments.
                </Card.Description>
              </Card.Body>
            </Card.Root>
          </LinkBox>
        </Group>
        <Button variant={'outline'} borderColor={'var(--color-primary)'} _hover={{ bgColor: 'var(--color-primary)' }}>
          show more
        </Button>
      </HStack>
      <HStack overflow={'auto'} hideFrom={'md'}>
        <LinkBox>
          <Card.Root maxW={'md'} minW={'250px'} overflow={'hidden'} borderColor={'var(--color-primary)'}>
            <Image
              src={'/helloibe.png'}
            ></Image>
            <Card.Body gap='2'>
              <Card.Title>
                <LinkOverlay href='https://www.helloibe.com'>helloibe.com 2025</LinkOverlay>
              </Card.Title>
              <Card.Description>
                This website is landing page for all helloibe related experiments.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </LinkBox>
        <Button variant={'outline'} color={'white'} borderColor={'var(--color-primary)'} _hover={{ bgColor: 'var(--color-primary)' }}>
          show more
        </Button>
      </HStack>
    </Container>
  )
}

export default Porfolio