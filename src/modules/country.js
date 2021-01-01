import { getCountriesApi } from "api/country";

//  actions

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
const GET_COUNTRIES_ERROR = "GET_COUNTRIES_ERROR";
const SET_COUNTRIES = "SET_COUNTRIES";

// 정렬 관련 actions
const SET_ASCENDING_STATUS = "SET_ASCENDING_STATUS";


// action 생성 함수, api 미들웨어
export const getCountries = () => async(dispatch) => {
    dispatch({ type: GET_COUNTRIES });
    try {
        const countries = await getCountriesApi();
        dispatch({ type: GET_COUNTRIES_SUCCESS, countries });
    } catch (e) {
        dispatch({ type: GET_COUNTRIES_ERROR, error: e });
    }
};

export const setCountries = newCountries => ({
    type: SET_COUNTRIES,
    newCountries
})


// 정렬 관련 액션 생성 함수

export const setAscendingStatus = newAscendingStatus => ({
    type: SET_ASCENDING_STATUS,
    newAscendingStatus
})


//  초기 countries 상태
const initialState = {
    countries: {
        loading: false,
        data: null,
        error: null,
    },
    searchedData: {
        data: null
    },
    ascendingStatus: {
        name: true,
        alpha2Code: true,
        callingCodes: true,
        capital: true,
        region: true,
    }
};
//  country reducer
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
                    loading: true,
                    data: action.countries,
                    error: null,
                },
            };
        case GET_COUNTRIES_ERROR:
            return {
                ...state,
                countries: {
                    loading: true,
                    data: null,
                    error: action.error,
                },
            };
        case SET_COUNTRIES:
            return {
                ...state,
                searchedData: {
                    data: action.newCountries,
                }
            }
        case SET_ASCENDING_STATUS:
            return {
                ...state,
                ascendingStatus: action.newAscendingStatus
            }

        default:
            return state;
    }
}