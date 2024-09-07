//현재 수강중인 강의들을 조회하는 hook
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthKeys } from '../../../libs/react-query/queryKeys.js';
import { apiClient } from '../../../libs/axios.js';

async function getInCourseFn(accessToken) {
  const { data } = await apiClient.get(`/teacher/getEnrolledCourse`, {
    headers: {
      'X-AUTH-TOKEN': encodeURIComponent(accessToken),
    },
  });
  return data;
}

export default function useFetchAllInCourse() {
  const queryData = useQueryClient();

  //현재 로그인한 Teacher의 accessToken
  const currentUserToken = queryData.getQueryData([
    AuthKeys.TOKEN_DATA_KEY,
  ]).accessToken;

  const fallback = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ['course', 'getInCourse'],
    queryFn: () => getInCourseFn(currentUserToken),
  });

  return { data, isLoading };
}
