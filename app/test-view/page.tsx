'use client'

import { Box, Button, ButtonGroup, IconButton, Input, Group, Pagination, Portal, Stack, Table } from "@chakra-ui/react"
import Sidebar from "@/components/Sidebar"
import routes from "@/routes"
import Navbar from "@/components/navbar/Navbar"
import { LuChevronLeft, LuChevronRight, LuSearch } from "react-icons/lu"

const TestView = () => {
  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffe Maker", category: "Coffee Maker Dengan Teknologi yang paling mutakhir", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
    { id: 6, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 7, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 8, name: "Headphones", category: "Accessories", price: 199.99 },
    { id: 9, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 10, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 11, name: "Headphones", category: "Accessories", price: 199.99 },
    { id: 12, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 13, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 14, name: "Headphones", category: "Accessories", price: 199.99 },
    { id: 15, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 16, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 17, name: "Headphones", category: "Accessories", price: 199.99 },
  ]
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
                <Group attached w="full" maxW="sm">
                  <Input flex="1"/>
                  <Button bg="bg.subtle" variant="outline">
                    Submit
                  </Button>
                </Group>
                <Table.ScrollArea borderWidth="1px" rounded="md" height="80vh">
                  <Table.Root size="sm" striped>
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeader>Barcode</Table.ColumnHeader>
                        <Table.ColumnHeader>Nama</Table.ColumnHeader>
                        <Table.ColumnHeader>SKU</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Harga</Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {items.map((item) => (
                        <Table.Row key={item.id}>
                          <Table.Cell>{item.name}</Table.Cell>
                          <Table.Cell>{item.category}</Table.Cell>
                          <Table.Cell>{item.category}</Table.Cell>
                          <Table.Cell textAlign="end">Rp {item.price}</Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                </Table.ScrollArea>

                <Pagination.Root count={items.length * 5} pageSize={5} page={1} hidden={items.length < 20}>
                  <ButtonGroup variant="ghost" size="sm" wrap="wrap">
                    <Pagination.PrevTrigger asChild>
                      <IconButton>
                        <LuChevronLeft />
                      </IconButton>
                    </Pagination.PrevTrigger>

                    <Pagination.Items
                      render={(page) => (
                        <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                          {page.value}
                        </IconButton>
                      )}
                    />

                    <Pagination.NextTrigger asChild>
                      <IconButton>
                        <LuChevronRight />
                      </IconButton>
                    </Pagination.NextTrigger>
                  </ButtonGroup>
                </Pagination.Root>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TestView