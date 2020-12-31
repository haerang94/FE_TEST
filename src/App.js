import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import Country from "components/Country";


const App = () => {
    return ( 
      <ThemeProvider theme = { theme } >
        <GlobalStyle />
        <Country/>
        </ThemeProvider>
    );
};

export default App;