'use client'

import { Box, Button, Portal, Stack, FileUpload, Center, Heading, Icon, Flex } from "@chakra-ui/react"
import Sidebar from "@/components/Sidebar"
import routes from "@/routes"
import Navbar from "@/components/navbar/Navbar"
import { LuUpload } from "react-icons/lu"

const TestView = () => {
  return (
    <Box>
      <Box>
        <Sidebar routes={routes}></Sidebar>
        <Box
          float='right'
          minHeight='100vh'
          h='100%'
          overflow='auto'
          position='relative'
          w={{ base: '100%', lg: 'calc(100% - 290px)' }}
          maxW={{ base: '100%', lg: 'calc(100% - 290px)' }}
          transition='all 0.15s cubic-bezier(0.685, 0.0473, 0.346, 1)'
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box position='fixed' top='0' left='0' right='0' zIndex='100'>
              <Navbar />
            </Box>
          </Portal>
          <Box
            mx="auto"
            p={{ base: '20px', md: '30px' }}
            pe="20px"
            minH="100vh"
            bgColor='#031e3f'
            pt="50px"
          >
            <Box mt='75px'>
              <Stack w='full' gap='5'>
                <Heading textStyle='2xl'>Upload Produk</Heading>
                <Center>
                  <FileUpload.Root accept={["text/csv"]} maxW="xl" alignItems="stretch" maxFiles={1}>
                    <FileUpload.HiddenInput />
                    <FileUpload.Dropzone>
                      <Icon size="md" color="fg.muted">
                        <LuUpload />
                      </Icon>
                      <FileUpload.DropzoneContent>
                        <Box>Drag and drop files here</Box>
                        <Box color="fg.muted">.csv</Box>
                      </FileUpload.DropzoneContent>
                    </FileUpload.Dropzone>
                    <FileUpload.List />
                  </FileUpload.Root>
                </Center>
                <Flex w='full' justifyContent='center'>
                  <Button w='150px'>Submit</Button>
                </Flex>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TestView