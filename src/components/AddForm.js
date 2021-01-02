import React, { useCallback } from 'react';
import { reduxForm, reset } from 'redux-form';
import { InputField, Button } from 'components/sharedComponents';
import styled from 'styled-components';

const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  & div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }
`;

const AddForm = ({ handleSubmit, onAdd }) => {
  const handleAdd = useCallback(
    (value, dispatch) => {
      onAdd(value);
      dispatch(reset('addForm'));
    },
    [onAdd],
  );
  return (
    <Form onSubmit={handleSubmit(handleAdd)}>
      <div>
        <label htmlFor="name"> 이름 </label> <InputField name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="alpha2Code"> 코드 </label> <InputField name="alpha2Code" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="callingCodes"> 국가 전화번호 </label>
        <InputField name="callingCodes" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="capital"> 수도 </label> <InputField name="capital" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="region"> 대륙 </label> <InputField name="region" component="input" type="text" />
      </div>
      <Button type="submit"> 나라 추가 </Button>
    </Form>
  );
};

const WrappedForm = reduxForm({
  form: 'addForm',
  enableReinitialize: true,
})(AddForm);

export default WrappedForm;
