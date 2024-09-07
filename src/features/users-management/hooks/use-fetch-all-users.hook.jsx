import { apiClient } from '../../../libs/axios.js';
import { useQuery } from '@tanstack/react-query';

async function getAll(userType) {
  const { data } = await apiClient.get(`/${userType}/getAll`);

  return data;
}

//존재하는 모든 유저를 불러오는 커스텀훅
// userType를 받아서 ( Learner/Teacher ) 해당 userType의 모든 유저를 불러오는 커스텀훅
export default function useFetchAllUsers(userType) {
  const fallback = [];
  const { data = fallback, isLoading } = useQuery({
    queryKey: ['getAll', userType],
    queryFn: () => getAll(userType),
  });

  return { data, isLoading };
}
