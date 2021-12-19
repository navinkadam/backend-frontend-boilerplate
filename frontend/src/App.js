import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

import Loader from "./components/Loader";
import Spinner from "./components/Spinner";

import Pages from "./pages";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Router basename="/">
          <Loader />
          <Pages />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
