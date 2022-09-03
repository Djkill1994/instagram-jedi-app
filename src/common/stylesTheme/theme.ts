import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        contained: {
          height: "30px",
          backgroundColor: "#0095f6",
          color: "white",
          "&:hover": {
            backgroundColor: "#0095f6",
            opacity: "0.7",
          },
          "&:disabled": {
            opacity: "0.3",
            backgroundColor: "#0095f6",
            color: "white",
          },
        },
        text: {
          minWidth: "20px",
          fontSize: "16px",
          color: "#0095f6",
          fontWeight: "bold",
          "&:active": {
            opacity: "0.3",
          },
          "&:hover": {
            background: "none",
          },
        },
      },
    },
  },
});
