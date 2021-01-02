import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
    getCountries,
    setCountries,
    setSearchedData,
    setAscendingStatus,
    deleteInitialData,
    deleteSearchedData,
    setKeyword,
    updatePage,
    addCountries,
    addSearchedData
} from 'modules/country';

function useCountry() {

    // 정렬 상태
    const { ascendingStatus, page } = useSelector(state => state.country);
    // 국가 정보
    const { data, loading, error } = useSelector(state => state.country.countries);
    // 검색 정보 (검색 부분일치 필터링된 국가 정보)
    const { searchedData, keyword } = useSelector(state => ({
        searchedData: state.country.searchedData.data,
        keyword: state.country.keyword
    }));

    const dispatch = useDispatch();

    //  초기 국가 데이터 불러오기
    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const onAdd = value => {
        //   초기 데이터일 때
        const newCountries = data;
        newCountries.unshift(value);
        dispatch(setCountries(newCountries));
        if (searchedData) {
            if (value.name.toLowerCase().indexOf(keyword) !== -1) {
                dispatch(setSearchedData(newCountries));
            }
        }
    };



    //   검색했을 때
    const onSearch = ({ search }) => {
        // 검색어 없이 다시 검색하면 전체 데이터를 보여준다. searchedData는 null로 초기화한다
        if (!search) {
            dispatch(updatePage(8));
            dispatch(setSearchedData(null));
        } else if (keyword && data) {
            // 대소문자 구분없이 나라 검색해서 searchedData에 저장한다
            const newCountries = data.filter(country => country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
            dispatch(setSearchedData(newCountries));
            dispatch(updatePage(8));
        }
        dispatch(setKeyword(search.toLowerCase()));
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
        console.log(searchedData, data)
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
        console.log(searchedData, data)
            //   초기 데이터일 때
        if (!searchedData && data) {
            dispatch(deleteInitialData(name));
        }
        // 검색해서 나온 데이터일 때
        if (searchedData) {
            dispatch(deleteSearchedData(name));
        }
    };



    return {
        data,
        loading,
        error,
        page,
        searchedData,
        ascendingStatus,
        onSearch,
        onSort,
        onDelete,
        onAdd
    }

}

export default useCountry;