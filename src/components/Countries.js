import React from 'react';
import styled from 'styled-components';
import SearchForm from 'components/SearchForm';
import Country from 'components/Country';
import SortingForm from 'components/SortingForm';
import AddForm from 'components/AddForm';

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

const Countries = ({ countries, onSearch, onSort, ascendingStatus, onDelete, onAdd, keyword }) => (
  <Wrapper>
    <Nav> FE TEST </Nav>
    <AddForm onAdd={onAdd}></AddForm>
    <SearchForm onSearch={onSearch} keyword={keyword} />
    <SortingForm onSort={onSort} ascendingStatus={ascendingStatus} />
    <CardContainer>
      {countries.map(country => (
        <Country key={country.name} country={country} onDelete={onDelete} />
      ))}
    </CardContainer>
  </Wrapper>
);

Countries.defaultProps = {
  countries: [],
};

export default Countries;
