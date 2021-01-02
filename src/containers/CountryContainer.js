import React, { useEffect } from 'react';
import useCountry from 'customHooks/useCountry';
import Countries from 'components/Countries';
import { getCountries } from 'modules/country';
import { useDispatch } from 'react-redux';
const CountryContainer = () => {
  const { data, loading, error, searchedData, ascendingStatus, onSearch, onSort, onDelete, onAdd } = useCountry();
  const dispatch = useDispatch();
  //  초기 국가 데이터 불러오기
  useEffect(() => {
    dispatch(getCountries());
  }, []);

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
