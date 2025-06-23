'use client'

import { Center, Container, Mark, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <Container width={'full'} zIndex={'9'} pb={'150px'}>
      <Center>
        <Stack hideBelow={'md'} direction={'column'} justifyContent={'space-between'}>
          <Stack direction={'row'}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Stack direction={'column'} justifyContent={'center'}>
                <Text textTransform={'uppercase'} textStyle={{ lg: '4xl', md: '3xl', sm: '2xl' }}>
                  <Mark color={'var(--color-primary)'}>{'>'}</Mark> Hello, ibe is <Mark color={'var(--color-primary)'}>me</Mark>
                </Text>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Text>Software Engineer | Backend Devs | Interested in Web Development</Text>
                </motion.div>
              </Stack>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={'/cropped_ibe.png'}
                alt='ibe'
                boxSize={'150px'}
                borderRadius={'full'}
                border={'solid'}
                fit={'cover'}
              />
            </motion.div>
          </Stack>
        </Stack>
        <Stack hideFrom={'md'} direction={'column'} gap={'20px'}>
          <Center>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Stack direction={'column'}>
                <Center>
                  <Text textTransform='uppercase' color={'white'} textStyle={{ lg: '5xl', md: '4xl', sm: '2xl', smDown: '2xl' }}>
                    <Mark color={'var(--color-primary)'}>{'>'}</Mark> Hello, ibe is <Mark color={'var(--color-primary)'}>me</Mark>
                  </Text>
                </Center>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Text color={'white'}>Software Engineer | Backend Developer | Interested in Web Development</Text>
                </motion.div>
              </Stack>
            </motion.div>
          </Center>
          <Center>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={'/cropped_ibe.png'}
                alt='ibe'
                boxSize={'150px'}
                borderRadius={'full'}
                border={'solid white'}
                fit={'cover'}
              />
            </motion.div>
          </Center>
        </Stack>
      </Center>
    </Container>
  )
}

export default Hero