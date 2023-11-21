import React from "react";
import {
  useColorModeValue,
  Flex,
  CloseButton,
  Box,
  Text,
  BoxProps,
} from "@chakra-ui/react";

import { LinkItems } from "../../data/dummy";
import { NavItem } from "./NavItem"; // Assuming you have a NavItem component

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

export const SidebarContent: React.FC<SidebarProps> = ({
  onClose,
  ...rest
}: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
         Dashboard
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};
