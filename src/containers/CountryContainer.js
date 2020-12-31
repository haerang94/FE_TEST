import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Countries from 'components/Countries';
import { getCountries } from 'modules/country';

const CountryContainer = () => {
  const { data, loading, error } = useSelector(state => ({
    data: state.country.countries.data,
    loading: state.country.countries.loading,
    error: state.country.countries.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const onSearch = ({ search }) => {
    console.log('value', search);
  };

  // if(loading)return
  if (error) return <div>에러 발생</div>;
  // if (!data) return null;

  return (
    <div>
      {loading && !data && <div>로딩 중</div>}
      {data && <Countries countries={data} onSearch={onSearch} />}
    </div>
  );
};

export default CountryContainer;
