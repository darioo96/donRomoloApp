import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.jpg";
import { TbShoppingCart } from "react-icons/tb";

function Navbar() {
  return (
    <Flex direction={"row"} p={8} alignItems="center">
      <Image src={logo} borderRadius="full" boxSize="100" />
      <Spacer />

      <Text bg="orange.100" borderRadius={"full"} paddingInline={20} paddingBlock={5} fontSize={"2xl"} >
        Don Romolo
      </Text>
      <Spacer />
      <Box>
        <TbShoppingCart size="s"/>
      </Box>
    </Flex>
  );
}

export default Navbar;
