export const getCountries = async() => {
    const data = await axios(
        "https://restcountries.eu/rest/v2/all?fields=alpha2Code;capital;name;region;callingCodes"
    ).then((response) => response.data);
    return data;
};