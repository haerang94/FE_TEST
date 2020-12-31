import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import styled from "styled-components";
import Country from "components/Country";

const Header = styled.h1 `
  color: blue;
`;

const App = () => {
    return ( 
      <ThemeProvider theme = { theme } >
        <GlobalStyle />
        <Country/>
        </ThemeProvider>
    );
};

export default App;