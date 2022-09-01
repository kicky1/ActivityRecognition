import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import MenuItem from "./MenuItem";
import {
  BiStats,
  AiOutlineHome
} from "react-icons/all";


const Menu = () => {
  return (
    <>
        <Box w={300} bg="primary.100" paddingLeft={8}>
          <VStack mt="50px" alignItems="left">
            <MenuItem text="Strona główna" icon={AiOutlineHome} link="/" />
            <MenuItem text="Klasyfikacja" icon={BiStats} link="/classifiction" />
            <MenuItem text="Informacje szczegółowe" icon={BiStats} link="/information" />
          </VStack>
        </Box>

    </>
  );
};

export default Menu;