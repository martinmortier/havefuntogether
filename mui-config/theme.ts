import { createTheme } from "@mui/material/styles"
import { red } from "@mui/material/colors"

const purple = "#2A1D6A"

const theme = createTheme({
  palette: {
    primary: {
      main: purple,
    },
    secondary: {
      main: "#e6effc",
      contrastText: purple,
    },
  },
})

export default theme
