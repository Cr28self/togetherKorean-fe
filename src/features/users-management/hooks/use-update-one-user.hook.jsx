import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { UserTypeInfo } from '../../../constant/table/UserTypeInfo.js';
import { apiClient } from '../../../libs/axios.js';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';
import { PATH_PUBLIC } from '../../../constant/link/PublicLinks.js';

async function updateOneUserFn(user, targetData) {
  //데이터 가공

  const requestData = {
    [UserTypeInfo.joinType[user].id]: targetData.id,
    [UserTypeInfo.joinType[user].password]: targetData.password,
    [UserTypeInfo.joinType[user].name]: targetData.name,
    [UserTypeInfo.joinType[user].gender]: targetData.gender,
    [UserTypeInfo.joinType[user]?.birthday]: targetData?.birthday, //learner
    [UserTypeInfo.joinType[user]?.ssnum]: targetData?.ssnum, //teacher
    [UserTypeInfo.joinType[user].tel]: targetData.tel,
    [UserTypeInfo.joinType[user].email]: targetData.email,
    [UserTypeInfo.joinType[user].etc]: targetData.etc,
  };

  const { data } = await apiClient.put(`/${user}/update`, requestData);

  return data;

  //데이터 전송
}

//유저의 정보를 업데이트하는 커스텀훅
// Learner / Teacher 정보 업데이트
export default function useUpdateOneUser() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const { Toast } = useShowMutationToast();

  const { mutate } = useMutation({
    mutationFn: ({ userType, inputForm }) =>
      updateOneUserFn(userType, inputForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAll'] });
      navigate(PATH_PUBLIC.HOME);
      Toast('success', '수정 완료!');
    },
  });

  return { mutate };
}
