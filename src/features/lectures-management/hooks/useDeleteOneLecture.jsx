import { apiClient } from '../../../libs/axios.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';

async function deleteOneLectureFn(lectureCode) {
  const { data } = await apiClient.get(`/lectures/delete/${lectureCode}`);

  return data;
}

//강의 삭제
export default function useDeleteOneLecture() {
  const queryClient = useQueryClient();
  const { Toast } = useShowMutationToast();

  const { mutate: deleteOneLecture } = useMutation({
    mutationFn: (lectureCode) => deleteOneLectureFn(lectureCode),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getTeachersLectureInfo'] });
      Toast('success', '강의 삭제 완료');
    },
  });
  return { deleteOneLecture };
}
