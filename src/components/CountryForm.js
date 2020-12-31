import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const Form = styled.form`
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
  padding: 20px 0;
  & * {
    margin: 0 10px;
  }
`;

const InputField = styled(Field)`
  border: none;
  border-bottom: 1px solid black;
  width: 260px;
  padding: 7px;
  color: gray;
`;

const Button = styled.button`
  border-radius: 6px;
  padding: 3px 5px;
  border: 2px solid #b088f9;
  // border: none;
  color: #fff;
  background: #98acf8;
`;

const CountryForm = ({ submit }) => (
  <Form onSubmit={submit}>
    <div>
      <label htmlFor="search">
        <InputField id="search" name="search" component="input" type="text" />
      </label>
    </div>
    <Button type="submit">search</Button>
  </Form>
);

const WrappedForm = reduxForm({
  form: 'country-form',
})(CountryForm);

export default WrappedForm;
