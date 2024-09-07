//전체 강의 조회 hook

import { apiClient } from '../../../libs/axios.js';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthKeys } from '../../../libs/react-query/queryKeys.js';

async function getAllCourseFn(accessToken) {
  const { data } = await apiClient.get(`/teacher/getEnrolledCourse`, {
    headers: {
      'X-AUTH-TOKEN': encodeURIComponent(accessToken),
    },
  });
  return data;
}

export default function useFetchAllCourse() {
  const queryData = useQueryClient();

  //현재 로그인한 Teacher의 accessToken
  const currentUserToken = queryData.getQueryData([
    AuthKeys.TOKEN_DATA_KEY,
  ]).accessToken;

  const fallback = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ['course', 'getAllCourse'],
    queryFn: () => getAllCourseFn(currentUserToken),
  });

  return { data, isLoading };
}
