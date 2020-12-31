import { getCountries } from "api/country";

const GET_COUNTRIES = "GET_COUNTRIES";
const GET_COUNTRIES_SUCCESS = "GET_COUNTRIES_SUCCESS";
const GET_COUNTRIES_ERROR = "GET_COUNTRIES_ERROR";

export const getCountries = () => async(dispatch) => {
    dispatch({ type: GET_COUNTRIES });
    try {
        const countries = await getCountries();
        dispatch({ type: GET_COUNTRIES_SUCCESS, countries });
    } catch (e) {
        dispatch({ type: GET_COUNTRIES_ERROR, error: e });
    }
};

const initialState = {
    countries: {
        loading: false,
        data: null,
        error: null,
    },
};

export default function posts(state = initialState, action) {
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

        default:
            return state;
    }
}