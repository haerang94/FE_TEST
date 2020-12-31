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

const SortingForm = ({ onSort }) => {
  console.log('?', onSort);
  return (
    <SortContainer>
      <SortButton onClick={() => onSort('name')}>이름</SortButton>
      <SortButton onClick={() => onSort('alpha2Code')}>코드</SortButton>
      <SortButton onClick={() => onSort('callingCodes')}>국가 전화번호</SortButton>
      <SortButton onClick={() => onSort('capital')}>수도</SortButton>
      <SortButton onClick={() => onSort('region')}>대륙</SortButton>
    </SortContainer>
  );
};

export default SortingForm;
