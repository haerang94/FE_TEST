import React from "react";
import styled from 'styled-components';
import CountryForm from "components/CountryForm";

const Wrapper=styled.div`
    width:100%;
    height:200vh;
    position:relative;
    background: linear-gradient(#fff, #f1f6f9);

`;
const Nav=styled.nav`
    top:0;
    color:#fff;
    padding:10px 20px;
    font-weight:400;
    width:100%;
    position:sticky;
    font-size:36px;
    display:flex;
    align-itmes:center;
    background: linear-gradient(to right, #7579e7, #b9fffc);
`;

const Country = () => {
    const submit = (value) => {
        console.log(value);
    };
    return <Wrapper>
            <Nav>
                FE TEST
            </Nav>
            <CountryForm onSubmit = { submit } > </CountryForm>
        </Wrapper>;
};

export default Country;