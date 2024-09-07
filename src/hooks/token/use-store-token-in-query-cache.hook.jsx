import { useQueryClient } from '@tanstack/react-query';
import { AuthKeys } from '../../libs/react-query/queryKeys.js';
import { getItemFromLocalStorage } from '../../utils/crud-localstorage.js';
import { TOKEN_DATA_KEY } from '../../constant/auth/storage-token-key.const.js';

// localstorage와 queryCache의 토큰 동기화하는 커스텀훅
export default function useStoreTokenInQueryCache() {
  const queryClient = useQueryClient();

  const token = getItemFromLocalStorage(TOKEN_DATA_KEY);
  if (token) {
    queryClient.setQueryData([AuthKeys.TOKEN_DATA_KEY], token);
  }
}
