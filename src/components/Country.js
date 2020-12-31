import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  border: 1px solid black;
  margin: 10px auto;
  padding: 20px;
  border-radius: 5px;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h2 {
    font-weight: bold;
  }
  & li {
    margin: 5px 0;
  }
`;

const Country = ({ country }) => (
  <Card key={country.name}>
    <Content>
      <h2>이름</h2>
      <li> {country.name} </li>
    </Content>
    <Content>
      <h2>alpha2코드</h2>
      <li> {country.alpha2Code} </li>
    </Content>
    <Content>
      <h2>calling코드</h2>
      <li> {country.callingCodes[0]} </li>
    </Content>
    <Content>
      <h2>수도</h2>
      <li> {country.capital} </li>
    </Content>
    <Content>
      <h2>지역</h2>
      <li> {country.region} </li>
    </Content>
  </Card>
);

export default Country;
