import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border: 1px solid black;
  margin: 10px auto;
  padding: 20px;
  border-radius: 5px;
  & li {
    margin: 5px 0;
  }
`;

const Country = ({ country }) => (
  <Card key={country.name}>
    <li> {country.name} </li>
    <li> {country.alpha2Code} </li>
    <li> {country.callingCodes[0]} </li>
    <li> {country.capital} </li>
    <li> {country.region} </li>
  </Card>
);

export default Country;
