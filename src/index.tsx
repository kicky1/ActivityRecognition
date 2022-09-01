import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import { App } from "./App"
import {StrictMode} from 'react';
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ColorModeScript/>
    <App />
  </StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
