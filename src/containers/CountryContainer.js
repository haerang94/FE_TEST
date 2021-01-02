import React, { useEffect } from 'react';
import useCountry from 'customHooks/useCountry';
import Countries from 'components/Countries';

const CountryContainer = () => {
  const { data, loading, error, page, searchedData, ascendingStatus, onSearch, onSort, onDelete, onAdd } = useCountry();

  const slicedData = searchedData ? searchedData.slice(0, page) : data ? data.slice(0, page) : null;

  if (error) return <div>에러 발생</div>;
  return (
    <div>
      {loading && !data && <div>로딩 중</div>}
      {data && (
        <Countries
          data={slicedData}
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
