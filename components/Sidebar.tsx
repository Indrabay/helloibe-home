import { Box } from "@chakra-ui/react";
import Content from "./sidebar/Content";

export default function Sidebar(props: any) {
  const { routes } = props;
  return (
    <Box
      display={{sm: 'none', lg: 'block'}}
      w='100%'
      position='fixed'
      minH='100%'
    >
      <Box
        bg='navy.800'
        transition='0.2 linear'
        w='300px'
        h='100vh'
        minH='100%'
        overflowX='hidden'
      >
        <Content routes={routes}></Content>
      </Box>
    </Box>
  )
}