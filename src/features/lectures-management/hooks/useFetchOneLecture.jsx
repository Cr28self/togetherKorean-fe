//강의 코드로 하나의 강의 정보를 가져오는 커스텀훅

import { apiClient } from '../../../libs/axios.js';
import { useQuery } from '@tanstack/react-query';

export async function getOneLectureFn(lectureCode) {
  const { data } = await apiClient.get(`/lectures/get/${lectureCode}`);

  return data;
}

//LectureCode에 해당하는 강의 정보 불러오기
export default function useFetchOneLecture(lectureCode) {
  const fallback = {};

  const { data: oneLecture = fallback, isLoading } = useQuery({
    queryKey: ['getOneLecture', lectureCode],
    queryFn: () => getOneLectureFn(lectureCode),
  });

  return { oneLecture, isLoading };
}
