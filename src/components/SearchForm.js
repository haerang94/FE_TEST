import React, { useCallback } from 'react';
import { reduxForm, reset } from 'redux-form';
import styled from 'styled-components';
import { Button, InputField } from 'components/sharedComponents';
import { debounce } from 'lodash';

const Form = styled.form `
  width: 50%;
  min-width:400px;
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
    const debouncedChange = debounce(value => {
        onSearch({ search: value });
    }, 200);
    // 검색 폼 아무것도 입력하지 않을 때에는 무시
    const handleChange = (e, newValue) => {
        if (!newValue) return;
        debouncedChange(newValue);
    };
    const submit = useCallback(
        (value, dispatch) => {
            // submit 후 초기화
            onSearch(value);
            dispatch(reset('searchForm'));
        }, [onSearch],
    );
    return ( <
        Form onSubmit = { handleSubmit(submit) } >
        <
        label htmlFor = "search" >
        <
        InputField id = "search"
        name = "search"
        component = "input"
        type = "text"
        onChange = { handleChange }
        /> < /
        label > <
        Button type = "submit" > search < /Button> < /
        Form >
    );
};
const WrappedForm = reduxForm({
    form: 'searchForm',
})(SearchForm);

export default WrappedForm;