import { useEffect } from 'react';

// 모달창 바깥 부분 클릭하면,모달창 닫히는 기능 커스텀훅
export default function useOutSideClick(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.();
      }
    };

    window.addEventListener('mousedown', handleClick);

    return () => window.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}

// ref로 지정한 요소의 밖을 클릭시, callback함수 실행
