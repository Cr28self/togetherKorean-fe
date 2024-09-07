import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { removeItemFromLocalStorage } from '../../../utils/crud-localstorage.js';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';
import { PATH_AUTH } from '../../../constant/link/AuthLinks.js';
import { TOKEN_DATA_KEY } from '../../../constant/auth/storage-token-key.const.js';

//로그아웃 커스텀훅
export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { Toast } = useShowMutationToast();

  function handleLogout() {
    //Localstorage에 저장되어있는 Token 제거
    removeItemFromLocalStorage(TOKEN_DATA_KEY);

    //Query Cache에 있는 토큰 정보 제거
    queryClient.removeQueries();

    navigate(PATH_AUTH.LOGIN);
    Toast('success', '로그아웃 완료');
  }

  return { handleLogout };
}
