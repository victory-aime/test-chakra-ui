import { Box, Flex, useColorModeValue, Card } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/Hero";
import ProductList from "./components/Product/Products";
import Testimonials from "./components/Testimonials/Testimonials";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
//import "./index.css"

function App() {
  return (
    <Box w="full" h="full" px={4} py={4}>
      <Flex direction="column" h="full">
        <Navbar />

        <Flex flex={1} align="center" justify="center">
          <HeroSection />
        </Flex>
        <Card>
          <Flex
            flex={1}
            align="center"
            justify="center"
            color={useColorModeValue("black.50", "pink.400")}
          >
            <ProductList />
          </Flex>
        </Card>
        <Flex
          flex={1}
          align="center"
          justify="center"
          color={useColorModeValue("black.50", "pink.400")}
        >
          <Testimonials />
        </Flex>

        <Flex flex={1} align="center" justify="center">
          <Features />
        </Flex>

        <Flex>
          <Footer />
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
