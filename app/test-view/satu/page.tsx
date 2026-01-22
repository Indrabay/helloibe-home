import Sidebar from '@/components/Sidebar'
import { Box, Container, Input, InputGroup, Table, Button, Group, Flex } from '@chakra-ui/react'
import { MdSearch } from 'react-icons/md'
import { ChangeEvent } from 'react';

const page = () => {
  const items = [
    { id: 1, barcode: '111', name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, barcode: '222', name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, barcode: '333', name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, barcode: '444', name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, barcode: '555', name: "Headphones", category: "Accessories", price: 199.99 },
  ]

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  }
  return (
    <Box>
      <Sidebar />
      <Container
        marginLeft={'300px'}
        top={'150px'}
        w={'auto'}
        position={'relative'}
        bgColor='#021d3d'
        h='85vh'
      >
        <Box pt='20px' display='flex' flexDirection='column' gap='10px'>
          <Flex w='full' justifyContent={'flex-end'}>
             <Group>
            <InputGroup
            w='200px'
            startElement={<MdSearch />}>
            <Input placeholder='search' />
            </InputGroup>
            <Button bg="bg.subtle" variant="outline">
              Submit
            </Button>
          </Group>
          </Flex>
         
          <Table.ScrollArea borderWidth="1px" maxW="full">
            <Table.Root
              key='simple'
              size='lg'
              rounded='md'
              interactive
            >
              <Table.Header >
                <Table.Row>
                  <Table.ColumnHeader>Barcode</Table.ColumnHeader>
                  <Table.ColumnHeader>Name</Table.ColumnHeader>
                  <Table.ColumnHeader>SKU</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {items.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.barcode}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.category}</Table.Cell>
                    <Table.Cell textAlign="end">Rp {item.price}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Table.ScrollArea>
        </Box>
      </Container>
    </Box>
  )
}

export default page