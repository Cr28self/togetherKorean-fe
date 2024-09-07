import { apiClient } from '../../../libs/axios.js';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';
import { PATH_AUTH } from '../../../constant/link/AuthLinks.js';
import { PATH_PRIVATE } from '../../../constant/link/PrivateLinks.js';
import { JOIN_KEY } from '../constants/index.js';

//회원가입
async function joinedFn(userType, joinedInput) {
  //userType - learner/teacher

  // user의 type에 따라 회원가입
  const requestData = {
    [JOIN_KEY[userType].id]: joinedInput.id,
    [JOIN_KEY[userType].password]: joinedInput.password,
    [JOIN_KEY[userType].name]: joinedInput.name,
    [JOIN_KEY[userType].gender]: joinedInput.gender,
    [JOIN_KEY[userType]?.birthday]: joinedInput?.birthday,
    [JOIN_KEY[userType]?.ssnum]: joinedInput?.ssnum,
    [JOIN_KEY[userType].tel]: joinedInput.tel,
    [JOIN_KEY[userType].email]: joinedInput.email,
    [JOIN_KEY[userType].etc]: joinedInput.etc,
  };

  // api통신
  return await apiClient.post(`/${userType}/join`, requestData);
}

//회원가입 커스텀훅
export default function useJoin(userType) {
  const navigate = useNavigate();
  const { Toast } = useShowMutationToast();

  const { mutate } = useMutation({
    mutationFn: (inputForm) => joinedFn(userType, inputForm),
    onSuccess: () => {
      Toast('success', '회원가입 완료');
      if (userType === 'learner') {
        // /login으로 이동
        navigate(PATH_AUTH.LOGIN);
      } else {
        //ADMIN_HOME으로 이동
        navigate(PATH_PRIVATE.ADMIN.HOME);
      }
    },
  });

  return { mutate };
}
