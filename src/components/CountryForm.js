import React from "react";
import { Field,reduxForm } from "redux-form";
import styled from 'styled-components';

const InputField=styled(Field)`
    background:pink;
    outline:none;
    border:none;
    border:1px solid black;
`;

let CountryForm = ({submit}) => {
    return(     
    <form onSubmit={submit}>
    <div>
      <label htmlFor="search">Search</label>
      <InputField name="search" component="input" type="text" />
    </div>
    <button type="submit">search</button>
  </form>);
};

CountryForm=reduxForm({
    form:'country-form'
})(CountryForm)

export default CountryForm;