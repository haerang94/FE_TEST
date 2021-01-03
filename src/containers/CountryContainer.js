import React from 'react';
import useCountry from 'customHooks/useCountry';
import useInfiniteScroll from 'customHooks/useInfiniteScroll';
import Countries from 'components/Countries';

const CountryContainer = () => {
  const { data, loading, error, page, searchedData, ascendingStatus, onSearch, onSort, onDelete, onAdd } = useCountry();
  useInfiniteScroll();
  // 무한 스크롤로 보여줄 데이터 부분만 잘라서 보여준다
  const slicedData = searchedData ? searchedData.slice(0, page) : data ? data.slice(0, page) : [];

  if (error) return <div>에러 발생</div>;
  return (
    <Countries
      data={slicedData}
      onSearch={onSearch}
      onSort={onSort}
      ascendingStatus={ascendingStatus}
      onDelete={onDelete}
      onAdd={onAdd}
      loading={loading}
    />
  );
};

export default CountryContainer;
