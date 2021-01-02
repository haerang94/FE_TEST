import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleFetching } from 'modules/country';

function useInfiniteScroll() {

    const { fetching } = useSelector(state => state.country);
    const dispatch = useDispatch();
    const fetchMoreData = () => {
        dispatch(toggleFetching());
    }


}

export default useInfiniteScroll;