import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { App } from "./common/components/App";
import { createTheme, ThemeProvider } from "@mui/material";

const prepare = async (): Promise<void> => {
  const { worker } = await import("./mocks/browser");
  await worker.start({ onUnhandledRequest: "bypass" });
};

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "30px",
          backgroundColor: "#0095f6",
          textTransform: "none",
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
      },
    },
  },
});

prepare().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
});
