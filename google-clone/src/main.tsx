import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    body: {
      darkColor: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    body?: {
      darkColor?: string;
    };
  }
}

const theme = createTheme({
  body: {
    darkColor: "rgba(32,33,36,1)",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
