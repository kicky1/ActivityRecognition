import { Box, HStack, VStack, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";
import Menu from "./Menu";
type Props = {
  children: React.ReactNode;
};
const AppLayout = ({ children }: Props) => {
  return (
    <VStack spacing={0} minW="100vw">
      <Header />
      <Flex direction="row" minH="calc(100vh - 80px)" minW="100vw" w="100%">
        <Menu />
        {children}
      </Flex>
    </VStack>
  );
};

export default AppLayout;
