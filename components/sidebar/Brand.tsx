import { Flex, Heading } from "@chakra-ui/react";
import { HSeparator } from "../separator/Separator";

export default function Brand() {
  return (
    <Flex align='center' direction='column'>
      <Heading textTransform='uppercase' mb='20px' textStyle={'2xl'}>HelloWarung</Heading>
      <HSeparator mb='20px' />
    </Flex>
  )
}