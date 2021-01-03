import React, { useCallback } from 'react';
import styled from 'styled-components';
import { WindowClose } from '@styled-icons/fa-regular/WindowClose';

const CloseBtn = styled(WindowClose)`
  width: 15px;
  height: 15px;
  margin-left: auto;
  margin-bottom: 10px;
  &:hover,
  &:active {
    cursor: pointer;
    color: #9088d4;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #c6fced;
  &:hover {
    box-shadow: 2px 2px 5px #aca8ff, -1px -1px 3px #c6fced;
    cursor: pointer;
  }
  height: 200px;
`;

const Content = styled.div`
  width: 100%;
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

const Country = ({ country, onDelete }) => {
  // 중복되지 않는 다는 가정 하에 이름 기반 삭제, 이름 중복은 validation 검사 안해줌
  const handleDelete = useCallback(() => {
    onDelete(country.name);
  }, []);

  return (
    <Card key={country.name}>
      <CloseBtn onClick={handleDelete} />
      <Content>
        <h2> 이름 </h2> <li> {country.name} </li>
      </Content>
      <Content>
        <h2> 코드 </h2> <li> {country.alpha2Code} </li>
      </Content>
      <Content>
        <h2> 국가 전화번호 </h2> <li> {country.callingCodes && country.callingCodes[0]} </li>
      </Content>
      <Content>
        <h2> 수도 </h2> <li> {country.capital} </li>
      </Content>
      <Content>
        <h2> 대륙 </h2> <li> {country.region} </li>
      </Content>
    </Card>
  );
};

export default Country;
