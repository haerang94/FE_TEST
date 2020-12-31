import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import CountryContainer from "containers/CountryContainer";


const App = () => {
    return ( 
      <ThemeProvider theme = { theme } >
        <GlobalStyle />
        <CountryContainer/>
        </ThemeProvider>
    );
};

export default App;