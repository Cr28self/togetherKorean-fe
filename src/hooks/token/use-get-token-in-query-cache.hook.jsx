import { useQueryClient } from '@tanstack/react-query';
import { AuthKeys } from '../../libs/react-query/queryKeys.js';

//쿼리 캐시에 저장되어있는 토큰을 가져옴
export default function useGetTokenInQueryCache() {
  const queryClient = useQueryClient();
  return queryClient.getQueryData([AuthKeys.TOKEN_DATA_KEY]);
}
