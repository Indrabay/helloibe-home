import { Flex } from "@chakra-ui/react";

const HSeparator = (props: any) => {
  const { variant, children, ...rest } = props;
  return <Flex h='1px' w='100%' bg='rgba(135, 140, 189, 0.3)' {...rest}></Flex>;
};

export { HSeparator };