import { apiClient } from '../../../libs/axios.js';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PATH_PUBLIC } from '../../../constant/link/PublicLinks.js';
import { AuthKeys } from '../../../libs/react-query/queryKeys.js';
import { setLocalStorageItem } from '../../../utils/crud-localstorage.js';
import { useNavigate } from 'react-router-dom';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';
import { TOKEN_DATA_KEY } from '../../../constant/auth/storage-token-key.const.js';
import { LOGIN_KEY } from '../constants/index.js';
import { ROLE_ADMIN } from '../../../constant/role/role-type.const.js';
import { PATH_PRIVATE } from '../../../constant/link/PrivateLinks.js';

// 로그인 함수
async function loginFn(inputForm) {
  const requestData = {
    [LOGIN_KEY.ID]: inputForm.id,
    [LOGIN_KEY.PASSWORD]: inputForm.password,
  };

  // api통신
  return await apiClient.post(`/member/login`, requestData);
}

//로그인 커스텀훅
export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { Toast } = useShowMutationToast();
  const { mutate } = useMutation({
    mutationFn: (inputForm) => loginFn(inputForm),
    onSuccess: (result) => {
      setLocalStorageItem(TOKEN_DATA_KEY, result.data); //로그인 토큰 스토리지에 저장 & 리덕스에 저장

      //쿼리 캐시에 로그인 토큰 저장
      queryClient.setQueryData([AuthKeys.TOKEN_DATA_KEY], result.data);

      Toast('success', '환영합니다 Welcome!');
      //navigate to Public HomePage

      if (result.data.role === ROLE_ADMIN) {
        navigate(PATH_PRIVATE.ADMIN.HOME);
      } else {
        navigate(PATH_PUBLIC.HOME);
      }
    },
  });

  return { mutate };
}
