import { Box, Button, Center, Container, Divider, Flex, Heading, HStack, ListItem, Stack, Text, UnorderedList, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import axios from "axios";
import { forwardRef } from 'react';
import api from "../../utils/api";

// const api = axios.create({
//   baseURL: 'https://df28-79-186-41-66.eu.ngrok.io/api/'
// })
const InformationPage = () => {

  return (
    <>
    <Container maxW='container.xl'>
      <Flex direction="column" w="100%" mt="70px">
          <Stack flexDir="column" justifyContent="center" alignItems="center">
            <HStack mb="30px">
              <Heading color="primary.700" size="2xl" fontWeight="md">
                Informacje
              </Heading>
              <Heading color="primaryLight" size="2xl" fontWeight="md">
                Szczegółowe 
              </Heading>
            </HStack>
          </Stack>
          <Container maxW='80%' mt="20px" >
          <Box boxShadow='md' p='6' rounded='md' bg='white'>
            <Stack spacing={5}> 
                <Text fontSize='xl' >
                  Niniejsza strona poświęcona jest wykorzystywaniu sztucznych sieci neuronowych
                  oraz danych zebranych za pomocą elementów inteligentnego otoczenia takich jak
                  e-krzesło, w celu zapewnienia oceny dobrostanu osoby starszej.
                </Text>   
                <Divider/> 
                <Text fontSize='xl'>
                Stworzony system ma za zadanie wykrywać stany pacjentów w momencie ich wczytania
                oraz analizować otrzymane wyniki pod względem dokladności predykcji.
                </Text>
                <Divider/>   
                <Text fontSize='xl'>
                Stany rozpoznawane za pomocą aplikacji ActivityRecognition to:
                  <UnorderedList>
                    <ListItem>siedzenie</ListItem>
                    <ListItem>mówienie</ListItem>
                    <ListItem>kaszel</ListItem>
                  </UnorderedList>
                </Text>  
            </Stack>
          </Box>
          </Container>
        </Flex>
    </Container>
     
    </>
  );
};


export default InformationPage;