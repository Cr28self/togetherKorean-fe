//현재 로그인한 user의 정보를 가져오는 hook
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthKeys } from '../../../libs/react-query/queryKeys.js';
import { apiClient } from '../../../libs/axios.js';

export async function getLoggedInUserInfoFn(userType, accessToken) {
  const { data } = await apiClient.get(`/${userType}/getInfo`, {
    headers: {
      'X-AUTH-TOKEN': encodeURIComponent(accessToken),
    },
  });

  return data;
}

//현재 로그인한 유저의 정보를 가져오는 hook
export default function useGetLoggedInUserInfo(userType) {
  const queryData = useQueryClient();

  //현재 로그인한 User의 Token
  const currentUserToken = queryData.getQueryData([
    AuthKeys.TOKEN_DATA_KEY,
  ]).accessToken;

  const fallback = [];
  const { data = fallback } = useQuery({
    queryKey: ['getUserInfo'],
    queryFn: () => {
      return getLoggedInUserInfoFn(userType, currentUserToken);
    },
    staleTime: Infinity,
  });

  return { data };
}
