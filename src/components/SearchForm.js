import React, { useCallback } from 'react';
import { reduxForm, reset } from 'redux-form';
import styled from 'styled-components';
import { InputField, Button } from 'components/sharedComponents';

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

const SearchForm = ({ handleSubmit, onSearch }) => {
  const submit = useCallback((value, dispatch) => {
    // submit 후 초기화
    onSearch(value);
    dispatch(reset('searchForm'));
  }, []);
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <label htmlFor="search">
        <InputField id="search" name="search" component="input" type="text" />
      </label>
      <Button type="submit"> search </Button>
    </Form>
  );
};
const WrappedForm = reduxForm({
  form: 'searchForm',
  enableReinitialize: true,
})(SearchForm);

export default WrappedForm;
