import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import { Box, Container } from "@chakra-ui/react";
import Porfolio from "@/components/Porfolio";
import Footer from "@/components/Footer";

import { Separator } from "@chakra-ui/react"
export default function Home() {
  return (
    <Box as={'main'}>
      <Navbar />
      <Container maxWidth={'768px'} top={'200px'} pt={14}>
        <Hero />
        <About />
        <Porfolio />
        <Separator borderColor={'white'}/>
        <Footer />
      </Container>
    </Box>
  );
}
