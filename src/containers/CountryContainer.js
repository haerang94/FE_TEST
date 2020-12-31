import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Countries from 'components/Countries';
import { getCountries, setCountries } from 'modules/country';

const CountryContainer = () => {
  const { data, loading, error, searchedData } = useSelector(state => ({
    data: state.country.countries.data,
    loading: state.country.countries.loading,
    error: state.country.countries.error,
    searchedData: state.country.searchedData.data,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const onSearch = ({ search }) => {
    // 검색어 없이 다시 검색하면 전체 데이터를 보여준다. searchedData는 null로 초기화한다
    if (!search) {
      dispatch(setCountries(null));
    } else {
      // 대소문자 구분없이 나라 검색해서 searchedData에 저장한다
      const newCountries = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      dispatch(setCountries(newCountries));
    }
  };

  const onSort = keyword => {
    if (!searchedData && data) {
      const newCountries = data.sort((a, b) => {
        if (a[keyword] < b[keyword]) return -1;
        if (a[keyword] > b[keyword]) return 1;
        return 0;
      });
      dispatch(setCountries(newCountries));
    }

    if (searchedData) {
      const newCountries = searchedData.sort((a, b) => {
        if (a[keyword] < b[keyword]) return -1;
        if (a[keyword] > b[keyword]) return 1;
        return 0;
      });
      dispatch(setCountries(newCountries));
    }
  };

  if (error) return <div>에러 발생</div>;

  return (
    <div>
      {loading && !data && <div>로딩 중</div>}
      {!searchedData && data && <Countries countries={data} onSearch={onSearch} onSort={onSort} />}
      {searchedData && <Countries countries={searchedData} onSearch={onSearch} onSort={onSort} />}
    </div>
  );
};

export default CountryContainer;
