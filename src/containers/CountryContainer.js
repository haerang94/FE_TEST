import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Countries from 'components/Countries';
import { getCountries, setCountries } from 'modules/country';

const CountryContainer = () => {
  const [ascending, setAscending] = useState({
    name: true,
    alpha2Code: true,
    callingCodes: true,
    capital: true,
    region: true,
  });

  const { data, loading, error, searchedData } = useSelector(state => ({
    data: state.country.countries.data,
    loading: state.country.countries.loading,
    error: state.country.countries.error,
    searchedData: state.country.searchedData.data,
  }));
  const dispatch = useDispatch();

  //  초기 데이터 불러오기
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  //   검색했을 때
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

  //   정렬시 비교함수 (현재 정렬 키워드가 오름차순이면 내림차순 정렬, 내림차순이면 오름차순 정렬)
  const compareBy = keyword => {
    const isAscending = ascending[keyword];
    return (a, b) => {
      if (a[keyword] < b[keyword]) return isAscending ? -1 : 1;
      if (a[keyword] > b[keyword]) return isAscending ? 1 : -1;
      return 0;
    };
  };

  const handleUpdateAscending = (keyword, newCountries) => {
    const newAscending = ascending;
    newAscending[keyword] = !ascending[keyword];
    setAscending(newAscending);
    dispatch(setCountries(newCountries));
  };

  //   정렬 함수
  const onSort = keyword => {
    //   초기 데이터일 때
    if (!searchedData && data) {
      const newCountries = data.sort(compareBy(keyword));
      handleUpdateAscending(keyword, newCountries);
    }
    // 검색해서 나온 데이터일 때
    if (searchedData) {
      const newCountries = searchedData.sort(compareBy(keyword));
      setAscending(state => ({ ...state, keyword: !ascending[keyword] }));
      handleUpdateAscending(keyword, newCountries);
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
