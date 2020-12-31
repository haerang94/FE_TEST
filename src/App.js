import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import GlobalStyle from "styles/globalStyle";
import styled from "styled-components";
import axios from "axios";

const Header = styled.h1 `
  color: blue;
`;

const App = () => {
    const [data, setData] = useState("");
    const fetchData = async() => {
        const country = await axios(
            "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
        ).then((response) => {
            return response.data;
            console.log(response.data);
        });
        setData(country);
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return ( <
        ThemeProvider theme = { theme } >
        <
        GlobalStyle / >
        <
        Header > boilerplate < /Header>{" "} <
        /ThemeProvider>
    );
};

export default App;