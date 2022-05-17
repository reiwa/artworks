import { ChakraProvider } from "@chakra-ui/react"
import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { theme } from "./theme"

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
)

reportWebVitals()
