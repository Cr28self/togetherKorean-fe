import { apiClient } from '../../../libs/axios.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';

async function deleteOneUserFn(user, id) {
  const { data } = await apiClient.delete(
    `/${user}/delete?${
      user === 'learner' ? 'learner_id' : 'teacherCode'
    }=${id}`,
  );

  return data;
}
//유저 삭제 커스텀훅
export default function useDeleteOneUser(userType) {
  const queryClient = useQueryClient();
  const { Toast } = useShowMutationToast();

  const { mutate: deleteOneUser } = useMutation({
    mutationFn: (id) => deleteOneUserFn(userType, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAll', userType] });
      Toast('success', '삭제 완료');
    },
  });
  return { deleteOneUser };
}
