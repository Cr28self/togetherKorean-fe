import { useQueryClient } from '@tanstack/react-query';
import { AuthKeys } from '../libs/react-query/queryKeys.js';

//현재 로그인한 유저의 권한을 가져오는 hook
export default function useCheckRole(inputRole) {
  const queryData = useQueryClient();

  function checkRole() {
    return (
      inputRole === queryData.getQueryData([AuthKeys.TOKEN_DATA_KEY])?.role
    );
  }

  return {
    checkRole,
  };
}
