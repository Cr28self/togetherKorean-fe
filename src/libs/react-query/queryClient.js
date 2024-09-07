import { QueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

//React-Query로 통신 시, 에러날 경우 실행되는 콜백함수
function queryErrorHandler() {
  toast.dismiss(); //쌓여있는 모든 toast 제거
  toast.error('Network Error'); //에러 toast ON
}

//쿼리 클라이언트에 관한 정보들
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler, //React-Query의 useQuery로 통신시, 에러날 경우, 에러 처리 콜백
      refetchOnMount: true, //컴포넌트 Mount시, refetch
      refetchOnReconnect: true, //네트워크 재연결시, refetch
      refetchOnWindowFocus: false, //윈도우 창 전환시, refetch X
      retry: 0,
      suspense: true,
    },
    mutations: {
      //React-Query의 useMutation으로 통신시, 에러날 경우, 에러 처리 콜백
      onError: queryErrorHandler,
    },
  },
});
