import React from 'react';
import styled from 'styled-components';

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
  font-size: ${props => props.theme.size.smd};
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

const SortingForm = ({ onSort, ascendingStatus }) => {
  const { name, alpha2Code, callingCodes, capital, region } = ascendingStatus;

  return (
    <SortContainer>
      <SortButton onClick={() => onSort('name')}>이름{name ? ' (오름차순)' : '(내림차순)'}</SortButton>
      <SortButton onClick={() => onSort('alpha2Code')}>코드{alpha2Code ? ' (오름차순)' : '(내림차순)'}</SortButton>
      <SortButton onClick={() => onSort('callingCodes')}>
        국가 전화번호{callingCodes ? ' (오름차순)' : '(내림차순)'}
      </SortButton>
      <SortButton onClick={() => onSort('capital')}>수도{capital ? ' (오름차순)' : '(내림차순)'}</SortButton>
      <SortButton onClick={() => onSort('region')}>대륙{region ? ' (오름차순)' : '(내림차순)'}</SortButton>
    </SortContainer>
  );
};

export default SortingForm;
