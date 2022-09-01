import { Button, Container, Flex, Heading, HStack, Stack, Box, Text, Center, VStack, Image } from "@chakra-ui/react";
import React from "react";


const HomePage = () => {
  return (
    <>
    <Container maxW='container.xl'>
      <Flex direction="column" w="100%" mt="70px">
          <Stack flexDir="column" justifyContent="center" alignItems="center">
            <HStack mb="30px">
              <Heading color="primary.700" size="2xl" fontWeight="md">
                Activity 
              </Heading>
              <Heading color="primaryLight" size="2xl" fontWeight="md">
                Recognition
              </Heading>
            </HStack>
          </Stack>
          <Center>
          <Flex direction="column" w="70%" mt="30px" >
          <Image
            objectFit='cover'
            src='https://static.wixstatic.com/media/a1c5b3_d1fc084be8ef483394507924b0fda7e7~mv2.gif'
            alt='ecg'
          />
          </Flex>
          </Center>
          <Container maxW='80%' mt="40px" >
          <Box boxShadow='md' p='6' rounded='md' bg='white'>
            <VStack spacing={10}> 
                <Text fontSize='2xl'>
                    Witaj na stronie przeznaczonej do przeporwadzania klasyfikacji sygnałów EKG,           
                    za pomocą, której umożliwiona jest analiza danych w celu określania stanu osoby badanej.
                </Text> 
                <Text fontSize='2xl'>
                    W celu otrzymania większej ilosci informacji przejdź do zakładki "Informacje szczegółowe", 
                    w przypadku chęci rozpoczęcia przeprowadzania klasyfikacji przejdź do zakładki "Klasyfikacja".
                </Text>      
            </VStack>
          </Box>
          </Container>

      </Flex>
    </Container>
     
    </>
  );
};


export default HomePage;