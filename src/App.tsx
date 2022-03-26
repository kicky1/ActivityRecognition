import React, { useRef, useState } from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  Center,
  Button,
  Text,
  GridItem,
  Stack,
} from "@chakra-ui/react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Header from "./components/myHeader"
import myTheme from "./theme"
import { Spinner } from '@chakra-ui/react'
import axios from 'axios';
import Papa from 'papaparse';




export const App = () => {
  const [numMostCommon, setNumMostCommon] = React.useState(0);
  const [numImages, setNumImages] = React.useState(0);
  const [activity, setActivity] = React.useState("brak");
  const [loading, setLoading] = React.useState(false);
  const [disable, setDisable] = React.useState(false)

  const [selectedFile, setSelectedFile] = React.useState();
	const [isFilePicked, setIsFilePicked] = React.useState(false);

  const handleChange  = (event: any) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data)
      },
    });
  };

  const fileRef = useRef(null);


  function predict(){
    console.log(loading)
    var myParams = {
      data: 'C:/Users/kwicki/Desktop/Magisterka/sitting_3.csv'
    }
      axios.post('http://localhost:5000/api/query', myParams)
          .then(function(response){
              console.log(response)
              setNumMostCommon(response.data['mostCommon'])
              setNumImages(response.data['numImages'])
              setActivity(response.data['activity'])
              setLoading(false)
              setDisable(false)
      })
      .catch(function(error){
          console.log(error);
      });
      
  } 

  function clear(){
    setNumMostCommon(0)
    setNumImages(0)
    setActivity('brak')
  }

  return (
    <ChakraProvider theme={myTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Header text="Activity Recognition" color={myTheme.colors.primary}/>
        </Grid>
        <Grid minH="1vh" p="5vh">
          <Center>
            {loading? (
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            ):(
              <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden' color='teal.500'>
                <Box p='6'>
                  <Box ml='2' color='teal.700' fontSize='l'>
                    Aktywność: {activity}
                  </Box>
                  <Box ml='2' color='teal.700' fontSize='l'>
                    Ilość uderzeń serca sklasyfikownych jako siedzenie: {numMostCommon}
                  </Box>
                  <Box ml='2' color='teal.700' fontSize='l'>
                    Ilość wszystkich uderzeń serca: {numImages}
                  </Box>
                </Box>
              </Box>
            )
            }
          </Center>
        </Grid>
        <Grid minH="2vh" p="1vh" >
          <Center>
            <Stack spacing={4} direction='row' align='center'>
              <Button 
                colorScheme='teal' 
                variant='outline' 
                isDisabled = {disable}
                onClick={() => {setLoading(true); setDisable(true); predict()}} 
              > 
                Wykonaj pomiar 
              </Button>
              <Button 
                colorScheme='teal' 
                variant='outline' 
                isDisabled = {disable}
                onClick={() => {clear()}} 
              > 
                Wyczyść dane 
              </Button>
            </Stack>
          </Center>
        </Grid>
        <Grid>
          <Center>
            <Button 
              colorScheme='teal' 
              variant='outline' 
              size='md'
              height='48px'
              width='200px'
              border='1px'
              onClick={() => fileRef.current.click()}>
              Załaduj plik
            </Button>
            <input
              ref={fileRef}
              onChange={handleChange}
              multiple={false}
              type="file"
              hidden
              accept =".csv"
            />
          </Center>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
