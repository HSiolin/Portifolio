import { createTheme, responsiveFontSizes } from "@mui/material";


let theme = createTheme({
  palette: {
    primary: {
      main: "#003f72",
    },
    secondary: {
      main: "#2f5f98",
    },
     
  },
  typography:{
    fontFamily:"Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);
export default theme;