import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchingNextData } from 'modules/country';

function useInfiniteScroll() {

    const { fetching, page } = useSelector(state => state.country);
    const dispatch = useDispatch();
    const fetchMoreData = () => {
        dispatch(fetchingNextData(page + 8))
    }

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
            // 페이지 끝에 도달하면 추가 데이터를 받아온다
            fetchMoreData();
        }
    };

    useEffect(() => {
        // scroll event listener 등록
        window.addEventListener("scroll", handleScroll);
        return () => {
            // scroll event listener 해제
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return { fetching };
}

export default useInfiniteScroll;