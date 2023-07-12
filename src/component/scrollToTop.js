// 페이지 이동 시, 스크롤 맨 위로
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0); // 맨 위로 올림
    }, [pathname]);

    return null;
}