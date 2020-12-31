import React from 'react';
import styled from 'styled-components';
import CountryForm from 'components/CountryForm';
import Country from 'components/Country';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: linear-gradient(#fff, #f1f6f9);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  top: 0;
  color: #fff;
  padding: 10px 20px;
  font-weight: 400;
  width: 100%;
  position: sticky;
  font-size: 36px;
  display: flex;
  align-itmes: center;
  background: linear-gradient(to right, #7579e7, #b9fffc);
`;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 20px;
`;

const SortContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SortButton = styled.button`
  margin: 0 10px;
  box-shadow: 2px 2px 2px #98acf8;
  padding: 3px 8px;
  border-radius: 5px;
  background: #7579e7;
  color: #fcf8e8;
  border: none;
  &:hover {
    background: #6155a6;
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 2px #98acf8;
    cursor: pointer;
  }
`;

const Countries = ({ countries, onSearch }) => (
  <Wrapper>
    <Nav> FE TEST </Nav>
    <CountryForm onSearch={onSearch} />
    <SortContainer>
      <SortButton>이름</SortButton>
      <SortButton>코드</SortButton>
      <SortButton>국가 전화번호</SortButton>
      <SortButton>수도</SortButton>
      <SortButton>대륙</SortButton>
    </SortContainer>
    <CardContainer>
      {countries.map(country => (
        <Country key={country.name} country={country} />
      ))}
    </CardContainer>
  </Wrapper>
);

Countries.defaultProps = {
  countries: [],
};

export default Countries;
