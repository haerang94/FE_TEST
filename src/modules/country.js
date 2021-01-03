import { getCountriesApi } from "api/country";

//  actions
// 초기(전체) 데이터 액션
const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
const GET_COUNTRIES_ERROR = "GET_COUNTRIES_ERROR";
const SET_COUNTRIES = "SET_COUNTRIES";
const DELETE_INITIAL_DATA = "DELETE_INITIAL_DATA";

// 검색되어 나오는 데이터 액션
const SET_SEARCHED_DATA = "SET_SEARCHED_DATA";
const DELETE_SEARCHED_DATA = "DELETE_SEARCHED_DATA";
// 검색어
const SET_KEYWORD = "SET_KEYWORD";
// infinite scroll 액션
const START_FETCHING = 'START_FETCHING';
const STOP_FETCHING = "STOP_FETCHING";
const UPDATE_PAGE = "UPDATE_PAGE";

// 정렬 관련 actions
const SET_ASCENDING_STATUS = "SET_ASCENDING_STATUS";


// action 생성 함수, api 미들웨어

// 초기 데이터를 불러오는 비동기  액션 생성 함수
export const getCountries = () => async(dispatch) => {
    dispatch({ type: GET_COUNTRIES });
    try {
        const countries = await getCountriesApi();
        dispatch({ type: GET_COUNTRIES_SUCCESS, countries });
    } catch (e) {
        dispatch({ type: GET_COUNTRIES_ERROR, error: e });
    }
};

// 새로운 데이터로  set
export const setCountries = newCountries => ({
    type: SET_COUNTRIES,
    newCountries
});

// 특정 이름의 데이터 삭제 
export const deleteInitialData = (name) => ({
    type: DELETE_INITIAL_DATA,
    name
})

// infinite scroll 액션 생성 함수
export const toggleFetching = () => ({ type: SET_FETCHING });

// 다음 불러올 부분(page로 명시)을 업데이트 해준다
export const updatePage = (newpage) => ({
    type: UPDATE_PAGE,
    newpage
})

export const fetchingNextData = (newpage) => (dispatch) => {
    // 다음 부분 불러오기 시작 
    dispatch({ type: START_FETCHING });
    // 다음 불러오는 부분 업데이트가 끝나면 fetching을 false로 하여 다음 데이터를 
    // 불러올 수 있는 상태로 만들어준다
    return Promise.resolve(dispatch(updatePage(newpage))).then(
        () => dispatch({ type: STOP_FETCHING })
    )

}


//  검색 관련 액션생성 함수
export const setSearchedData = newCountries => ({
    type: SET_SEARCHED_DATA,
    newCountries
});


export const deleteSearchedData = (name) => ({
    type: DELETE_SEARCHED_DATA,
    name
})

export const setKeyword = (keyword) => ({ type: SET_KEYWORD, keyword })




// 정렬 관련 액션 생성 함수

export const setAscendingStatus = newAscendingStatus => ({
    type: SET_ASCENDING_STATUS,
    newAscendingStatus
})


//  초기 countries 상태
const initialState = {
    // 초기 데이터
    countries: {
        loading: false,
        data: null,
        error: false,
    },
    // 검색해서 필터링 된 데이터
    searchedData: {
        data: null
    },
    // 오름/내림차순 상태 (true는 오름차순)
    ascendingStatus: {
        name: true,
        alpha2Code: true,
        callingCodes: true,
        capital: true,
        region: true,
    },
    // 키워드, 새로운 데이터를 추가할 때도 쓴다  
    keyword: null,
    // 다음에 불러올 데이터의 기준(끝 부분)
    page: 8,
    // 현재 데이터를 불러오는 상태인지
    fetching: false
};
//  country reducer 리듀서
export default function country(state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: {
                    loading: true,
                    data: null,
                    error: null,
                },
            };
        case GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: {
                    loading: false,
                    data: action.countries,
                    error: null,
                },
            };
        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                countries: {
                    loading: false,
                    data: null,
                    error: action.error,
                },
            };
        case SET_COUNTRIES:
            return {
                ...state,
                countries: {
                    loading: false,
                    error: null,
                    data: action.newCountries
                }
            }

        case DELETE_INITIAL_DATA:
            return {
                ...state,
                countries: {
                    ...state.countries,
                    data: state.countries.data.filter(country => country.name !== action.name)
                }
            }



        case SET_ASCENDING_STATUS:
            return {
                ...state,
                ascendingStatus: action.newAscendingStatus
            }
        case SET_SEARCHED_DATA:
            return {
                ...state,
                searchedData: {
                    data: action.newCountries,
                }
            }

        case DELETE_SEARCHED_DATA:
            return {
                ...state,
                searchedData: { data: state.searchedData.data.filter(country => country.name !== action.name) }
            }
        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        case START_FETCHING:
            return {
                ...state,
                fetching: true,
            }
        case STOP_FETCHING:
            return {
                ...state,
                fetching: false,
            }
        case UPDATE_PAGE:
            return {
                ...state,
                page: action.newpage
            }

        default:
            return state;
    }
}