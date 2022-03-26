import { Box } from "@chakra-ui/react";
import React from "react";

function InfoBox() {
    const property = {
      activity: 'bieganie'
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Box p='6'>
            <Box ml='2' color='gray.800' fontSize='l'>
              Rozpoznano: {property.activity}
            </Box>
        </Box>
      </Box>
    )
  }

  export default InfoBox