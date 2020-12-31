import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const InputField = styled(Field)`
  border: none;
  border-bottom: 1px solid black;
`;

const CountryForm = ({ submit }) => (
  <form onSubmit={submit}>
    <div>
      <label htmlFor="search"> Search</label>
      <InputField id="search" name="search" component="input" type="text" />
    </div>
    <button type="submit">search</button>
  </form>
);

const WrappedForm = reduxForm({
  form: 'country-form',
})(CountryForm);

export default WrappedForm;
