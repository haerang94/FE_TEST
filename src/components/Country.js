import React from "react";
import styled from 'styled-components';
import CountryForm from "components/CountryForm";

const Wrapper=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: linear-gradient(to right, #9c27b0, #8ecdff);
`;

const Country = () => {
    const submit = (value) => {
        console.log(value);
    };
    return <Wrapper><CountryForm onSubmit = { submit } > </CountryForm></Wrapper>;
};

export default Country;