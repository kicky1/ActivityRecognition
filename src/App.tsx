import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
  Text
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Header from "./components/myHeader"
import myTheme from "./theme"

export const App = () => {
  return (
    <ChakraProvider theme={myTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Header text="Activity Recognition" color={myTheme.colors.primary}/>
        </Grid>
        <Grid minH="1vh" p="10vh">
          <Text color={myTheme.colors.secondary}>Activity Recognition</Text>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
