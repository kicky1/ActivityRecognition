import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Center, Container, Flex, Grid, Heading, HStack, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import axios from "axios";
import { forwardRef } from 'react';
import api from "../../utils/api";
import {useDropzone} from 'react-dropzone'

// const api = axios.create({
//   baseURL: 'https://df28-79-186-41-66.eu.ngrok.io/api/'
// })
const ClassifictionPage = () => {

  const [numMostCommon, setNumMostCommon] = React.useState(0);
  const [numImages, setNumImages] = React.useState(0);
  const [activity, setActivity] = React.useState("brak");
  const [time, setTime] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [loadedImage, setLoadedImage] = React.useState(false);
  const [disable, setDisable] = React.useState(false)
  const [disable2, setDisable2] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [image, setImage] = React.useState()
  const [moreInfo, setMoreInfo] = React.useState(false)


  const {acceptedFiles, getRootProps, getInputProps, isDragActive} = useDropzone()



  function clear(){
    setNumMostCommon(0)
    setNumImages(0)
    setActivity('brak')
    setDisable2(true)
  }

  function sendFile(){
    let formData = new FormData();
    let file = acceptedFiles[0]

    formData.append("file", file);

      axios.post('http://localhost:5000/api/query', formData)
          .then(function(response){
              setNumMostCommon(response.data['mostCommon'])
              setNumImages(response.data['numImages'])
              setActivity(response.data['activity'])
              setTime(response.data['time'])
              let image = response.data['image'].slice(2)
              image = image.slice(0,-1)
              setImage(image)
              setLoadedImage(true)
              setLoading(false)
              setDisable(false)
              setDisable2(false)

      })
      .catch(function(error){
          console.log(error.toJSON());
          setError(true)
          setTimeout(() => {
            setError(false)
            setLoading(false)
            setDisable(false)
          },5000)
      });
  }

  return (
    <>
    <Container maxW='container.xl'>
      <Flex direction="column" w="100%" mt="70px">
          <Stack flexDir="column" justifyContent="center" alignItems="center">
            <HStack mb="30px">
              <Heading color="primary.700" size="2xl" fontWeight="md">
                Klasyfikacja
              </Heading>
              <Heading color="primaryLight" size="2xl" fontWeight="md">
                Aktywności 
              </Heading>
            </HStack>
          </Stack>
          {!moreInfo ? (
            <>
            <Center>
              {loading ? (
                <Spinner
                  mt='50px' 
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl' />
              ) : (
                <Container maxW='80%' mt="20px">
                  <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                    <Text fontSize='2xl'>
                      Aktywność: {activity}
                    </Text>
                    {loadedImage ? <img src={`data:image/png;base64,${image}`}/>: ''}
                  </Box>
                  
                </Container>
              )}
            </Center><Grid minH="2vh" p="1vh" mt="50px">
                <Center>
                  <Stack spacing={4} direction='row' align='center'>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      isDisabled={disable}
                      onClick={() => { setLoading(true); setDisable(true); sendFile(); } }
                    >
                      Rozpocznij pomiar
                    </Button>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      isDisabled={disable}
                      onClick={() => { clear(); } }
                    >
                      Wyczyść dane
                    </Button>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ?
                        <Button
                          colorScheme='teal'
                          variant='outline'
                          isDisabled={disable}
                        >Umieść pliki </Button> :
                        <Button
                          colorScheme='teal'
                          variant='outline'
                          isDisabled={disable}
                        >Umieść dane</Button>}
                    </div>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      isDisabled={disable2}
                      onClick={() => { setMoreInfo(true); } }
                    >
                      Więcej informacji
                    </Button>
                  </Stack>

                </Center>
              </Grid></>
          ): 
          <><Center>
              {loading ? (
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='blue.500'
                  size='xl' />
              ) : (
                <Container maxW='80%' mt="20px">
                  <Box boxShadow='xl' p='6' rounded='md' bg='white'>
                  <Stack spacing={4}>
                    <Text fontSize='xl'>
                      Aktywność została sklasyfikowana jako: {activity}
                    </Text>
                    <Text fontSize='xl'>
                      Liczba wszystkich obrazów przedstawiających uderzenia serca: {numImages}
                    </Text>
                    <Text fontSize='xl'>
                      Ilość uderzeń serca sklasyfikownych jako {activity}: {numMostCommon}
                    </Text>
                    <Text fontSize='xl'>
                      Czas przeprowadzania klasyfikacji: {time} sec
                    </Text>
                    {loadedImage ? <img src={`data:image/png;base64,${image}`}/>: ''}
                  </Stack>
                  </Box>
                </Container>
              )}
            </Center><Grid minH="2vh" p="1vh" mt="50px">
                <Center>
                  <Stack spacing={4} direction='row' align='center'>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      isDisabled={disable}
                      onClick={() => { setMoreInfo(false) } }
                    >
                      Powrót
                    </Button>
                  </Stack>

                </Center>
              </Grid></>}
        </Flex>
        {error ? (
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Wystąpił błąd</AlertTitle>
          <AlertDescription>Podane dane są nieprawidłowe. Wymagany format .csv!</AlertDescription>
        </Alert> ) : (null)}
    </Container>

    </>
  );
};


export default ClassifictionPage;