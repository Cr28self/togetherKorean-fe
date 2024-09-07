import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../../../libs/axios.js';
import { AuthKeys } from '../../../libs/react-query/queryKeys.js';

export async function getLectureInfoByTeacherFn(accessToken) {
  const { data } = await apiClient.get(`/teacher/getLecture`, {
    headers: {
      'X-AUTH-TOKEN': encodeURIComponent(accessToken),
    },
  });
  return data;
}

// Teacher의 모든 Lecture 가져오는 커스텀훅
export default function useFetchALLlecture() {
  const queryData = useQueryClient();

  //현재 로그인한 Teacher의 accessToken
  const currentUserToken = queryData.getQueryData([
    AuthKeys.TOKEN_DATA_KEY,
  ]).accessToken;

  const fallback = [];

  const { data = fallback, isLoading } = useQuery({
    queryKey: ['getTeachersLectureInfo'],
    queryFn: () => getLectureInfoByTeacherFn(currentUserToken),
  });

  return { data, isLoading };
}
