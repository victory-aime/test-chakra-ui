"use client";

import {
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Box,
  Text,
} from "@chakra-ui/react";
import { MobileNav } from "./MobileNav";
import { SidebarContent } from "./SidebarContent";
import ProductSimple from "../Product/Products";

const SidebarWithNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box w="full" minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Main content can take pleace here*/}
        <Text>Hello victory</Text>
        <ProductSimple />
      </Box>
    </Box>
  );
};

export default SidebarWithNavbar;
