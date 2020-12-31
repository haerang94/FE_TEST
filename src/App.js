import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import styled from 'styled-components';

const Header=styled.h1`
    color:blue;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <Header>boilerplate</Header>
        </ThemeProvider>
      );
};

export default App;