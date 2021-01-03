import styled from 'styled-components';
import { Field } from 'redux-form';

const InputField = styled(Field)
` 
  border: none;
  border-bottom: 1px solid #98acf8;
  width: 260px;
  padding: 7px;
  color: gray;

`;


const InputWrapper = styled.div `
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input `
  border: none;
  border-bottom: 1px solid #98acf8;
  width: 260px;
  padding: 7px;
  color: gray;
`;

const Button = styled.button `

  border-radius: 6px;
  padding: 3px 5px;
  border: none;
  color: #fff;
  background: #8bdeff;
  box-shadow: 2px 2px 2px #98acf8;
  &:hover {
    background: #26466f;
    cursor: pointer;
  }
  &:active {
    box-shadow: 1px 1px 2px #6155a6;
    cursor: pointer;
  }
`;

const Span = styled.span `
  font-size:${props=>props.theme.size.sm};
  color:red;
  margin-top:3px;

`;

export { InputField, Button, InputWrapper, Input, Span };