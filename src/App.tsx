import * as React from "react"
import {
  ChakraProvider,
  Box,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import Text from "./components/Text"
import customTheme from "./theme"

export const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Text text="Activity Recognition" color="lightColor"/>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}
