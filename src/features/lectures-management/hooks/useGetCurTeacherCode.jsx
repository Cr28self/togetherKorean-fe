import { useQueryClient } from '@tanstack/react-query';

//QueryCache에 존재하는 강사 코드 추출
export default function useGetCurTeacherCode() {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(['getUserInfo'])?.teacherCode;
}
