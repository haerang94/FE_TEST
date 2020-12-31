import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: linear-gradient(135deg, #fff 70%, #c6fced);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  margin: 10px auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #ddd;
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  & h2 {
    font-weight: bold;
  }
  & li {
    margin: 5px 0;
    font-size: ${props => props.theme.size.sm};
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
