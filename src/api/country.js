import axios from "axios";

//  초기 전체 데이터 불러오기 
export const getCountriesApi = async() => {
    const data = await axios(
        "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
    ).then((response) => response.data);
    return data;
};