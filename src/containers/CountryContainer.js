import React from 'react';
import useCountry from 'customHooks/useCountry';
import useInfiniteScroll from 'customHooks/useInfiniteScroll';
import Countries from 'components/Countries';

const CountryContainer = () => {
  const { data, loading, error, page, searchedData, ascendingStatus, onSearch, onSort, onDelete, onAdd } = useCountry();
  useInfiniteScroll();

  const slicedData = searchedData ? searchedData.slice(0, page) : data ? data.slice(0, page) : [];

  if (error) return <div>에러 발생</div>;
  return (
    <div>
      <Countries
        data={slicedData}
        onSearch={onSearch}
        onSort={onSort}
        ascendingStatus={ascendingStatus}
        onDelete={onDelete}
        onAdd={onAdd}
        loading={loading}
      />
    </div>
  );
};

export default CountryContainer;
