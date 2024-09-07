import { apiClient } from '../../../libs/axios.js';
import { useQuery } from '@tanstack/react-query';

export async function getOneUserFn(user, userCode) {
  const { data } = await apiClient.get(`/${user}/get?code=${userCode}`);

  return data;
}

//유저타입, 유저 코드에 해당하는 유저의 정보를 가져오는 커스텀훅
export default function useFetchOneUser(user, userCode) {
  const fallback = {};

  const { data: oneUser = fallback, isLoading } = useQuery({
    queryKey: ['getOneUser', user, userCode],
    queryFn: () => getOneUserFn(user, userCode),
  });

  return { oneUser, isLoading };
}
