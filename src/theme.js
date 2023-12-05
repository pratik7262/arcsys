import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#F3AE9F",
    },
    secondary: {
      main: "#2F2F2F",
    },
    text: {
      main: "#FFF",
    },
    grey: {
      main: "#181818",
    },
    background: {
      main: "#050505",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 40,
      color: "#FFF",
    },
    h2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      color: "#FFF",
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      color: "#FFF",
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      color: "#FFF",
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      color: "#FFF",
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      color: "#FFF",
      fontSize: 14,
    },
  },
});
