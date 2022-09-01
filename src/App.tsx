import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  Flex,
  theme as baseTheme,
} from "@chakra-ui/react";
import jwt_decode from "jwt-decode";
import * as React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import api from "./utils/api";

import HomePage from "./pages/home/HomePage";
import HomePageContainer from "./pages/home/HomePageContainer";
import AppLayout from "./components/AppLayout";
import ClassifictionPageContainer from "./pages/classification/ClassifictionPageContainer";
import InformationPageContainer from "./pages/Information/InformationPageContainer";



const theme = extendTheme({
  colors: {
    primaryLight: baseTheme.colors.blue["300"],
    backgroundLight: "#EDF2F7",
    primary: baseTheme.colors.gray,
    // primary: {
    //   100: '#F7FAFC',
    //   200: '#EDF2F7',
    //   300: '#E2E8F0',
    //   400: '#CBD5E0',
    //   500: '#A0AEC0',
    //   600: '#718096',
    //   700: '#4A5568',
    //   800: '#2D3748',
    //   900: '#1A202C',
    // },
  },
});

export const App = () => {




  return (
    <ChakraProvider theme={theme}>
        <CSSReset />
          <BrowserRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<HomePageContainer/>}/>
                <Route path="/information" element={<InformationPageContainer/>}/> 
                <Route path="/classifiction" element={<ClassifictionPageContainer/>}/> 
              </Routes>
            </AppLayout>
          </BrowserRouter>
    </ChakraProvider>
  );
};