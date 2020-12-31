import React,{useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import Countries from "components/Countries";
import {getCountries} from 'modules/country';

const CountryContainer = () => {
    const {data,loading,error}=useSelector(state=>state.country.countries);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getCountries());
        
    },[])
    console.log(data);
    // if(loading)return 
    if(error) return <div>에러 발생</div>
    // if (!data) return null;

    return ( 
    <div >
        {loading &&!data&& <div>로딩 중</div>}
        {data &&<Countries countries={data} /> }
    </div>
    );
};

export default CountryContainer;