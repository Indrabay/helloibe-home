import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";

export function Links(props: any) {
  const { routes } = props;

  const createLinks = (routes: any) => {
    return routes.map((route: any, index: number) => {
      return (
        <Link href={route.path} key={index}>
          <Box>
            <HStack
              py='5px'
              px='10px'
            >
              <Flex
                w='100%'
                alignItems='center'
                justifyContent='center'
              >
                <Box
                  color='secondaryGray.500'
                  me='18px'
                >
                  {route.icon}
                </Box>
                <Text
                  me='auto'
                  color='secondaryGray.500'
                  fontWeight='normal'
                >
                  {route.name}
                </Text>
              </Flex>
              <Box
                h='36px'
                w='4px'
                borderRadius='5px'
              />
            </HStack>
          </Box>
        </Link>
      )
    })
  }

  return createLinks(routes);
}

export default Links;