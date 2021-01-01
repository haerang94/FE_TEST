import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Countries from 'components/Countries';
import {
  getCountries,
  setCountries,
  setSearchedData,
  setAscendingStatus,
  deleteInitialData,
  deleteSearchedData,
  setKeyword,
} from 'modules/country';

const CountryContainer = () => {
  // 정렬 상태
  const { ascendingStatus, keyword } = useSelector(state => state.country);
  // 국가 정보
  const { data, loading, error } = useSelector(state => state.country.countries);
  // 검색 정보 (검색 부분일치 필터링된 국가 정보)
  const searchedData = useSelector(state => state.country.searchedData.data);

  const dispatch = useDispatch();

  //  초기 국가 데이터 불러오기
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  //   검색했을 때
  const onSearch = ({ search }) => {
    // 검색어 없이 다시 검색하면 전체 데이터를 보여준다. searchedData는 null로 초기화한다

    if (!search) {
      dispatch(setSearchedData(null));
    } else if (keyword) {
      // 대소문자 구분없이 나라 검색해서 searchedData에 저장한다
      const newCountries = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
      dispatch(setSearchedData(newCountries));
    }
    dispatch(setKeyword(search));
  };

  //   정렬시 비교함수 (현재 정렬 키워드가 오름차순이면 내림차순 정렬, 내림차순이면 오름차순 정렬)
  const compareBy = keyword => {
    const isAscending = ascendingStatus[keyword];
    // 숫자 비교시에는 숫자로 변환한 다음 비교한다. 문자열로 비교시 결과 다름
    if (keyword === 'callingCodes') {
      return (a, b) => {
        const aa = +a[keyword][0];
        const bb = +b[keyword][0];
        if (aa < bb) return isAscending ? -1 : 1;
        if (aa > bb) return isAscending ? 1 : -1;
        return 0;
      };
    }
    return (a, b) => {
      if (a[keyword] < b[keyword]) return isAscending ? -1 : 1;
      if (a[keyword] > b[keyword]) return isAscending ? 1 : -1;
      return 0;
    };
  };

  //   정렬 결과를 redux데이터에 저장하고 현재 정렬 키워드 오름/내림차순 상태 토글시키는 함수
  const handleUpdateAscending = (keyword, newCountries) => {
    // 현재 키워드의 정렬 순서를 토글한 후 새로 정렬된 데이터 저장
    const newAscendingStatus = ascendingStatus;
    newAscendingStatus[keyword] = !ascendingStatus[keyword];
    dispatch(setAscendingStatus(newAscendingStatus));
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
      handleUpdateAscending(keyword, newCountries);
    }
  };

  const onDelete = name => {
    //   초기 데이터일 때
    if (!searchedData && data) {
      dispatch(deleteInitialData(name));
    }
    // 검색해서 나온 데이터일 때
    if (searchedData) {
      dispatch(deleteSearchedData(name));
    }
  };

  const onAdd = value => {
    //   초기 데이터일 때
    if (!searchedData && data) {
      const newCountries = data;
      newCountries.unshift(value);
      dispatch(setCountries(newCountries));
    }
    // 검색해서 나온 데이터일 때
    if (searchedData) {
      const newCountries = searchedData;
      newCountries.unshift(value);
      dispatch(setSearchedData(newCountries));
    }
  };
  if (error) return <div>에러 발생</div>;

  return (
    <div>
      {loading && !data && <div>로딩 중</div>}
      {data && (
        <Countries
          data={data}
          searchedData={searchedData}
          onSearch={onSearch}
          onSort={onSort}
          ascendingStatus={ascendingStatus}
          onDelete={onDelete}
          onAdd={onAdd}
        />
      )}
    </div>
  );
};

export default CountryContainer;
