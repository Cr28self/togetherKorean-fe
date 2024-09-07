import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { getWdate } from '../../../utils/get-date.js';
import { apiClient } from '../../../libs/axios.js';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';
import { PATH_PUBLIC } from '../../../constant/link/PublicLinks.js';

async function updateOneLectureFn(inputForm) {
  //데이터 가공
  const currentTime = getWdate();

  const { lectureCode, ...requestData } = { ...inputForm, wdate: currentTime };

  const { data } = await apiClient.post(
    `/lectures/update/${lectureCode}`,
    requestData,
  );

  return data;

  //데이터 전송
}

//하나의 강의 정보 업데이트
export default function useUpdateOneLecture() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { Toast } = useShowMutationToast();

  const { mutate } = useMutation({
    mutationFn: ({ inputForm }) => updateOneLectureFn(inputForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTeachersLectureInfo'] });
      navigate(PATH_PUBLIC.HOME);
      Toast('success', '수정 완료!');
    },
  });

  return { mutate };
}
