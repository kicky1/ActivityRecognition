import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";


const Header = () => {
  return (
    <Flex px="47px" bg="primary.700" alignItems="center" w="100%" h="80px">
      <Heading size="md" color="white" fontWeight="md">
        Activity
      </Heading>
      <Heading size="md" color="primaryLight" fontWeight="md">
        Recognition
      </Heading>
      <Spacer />
    </Flex>
  );
};

export default Header;