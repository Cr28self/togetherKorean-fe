import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { getWdate } from '../../../utils/get-date.js';
import { apiClient } from '../../../libs/axios.js';
import useShowMutationToast from '../../../hooks/use-show-mutation-toast.hook.jsx';

async function createLectureFn(createInput) {
  const currentDate = getWdate();

  const requestData = {
    ...createInput,
    wdate: currentDate,
  };

  return await apiClient.post(`/lectures/create`, requestData);
}

//강의 생성
export default function useCreateLecture() {
  const navigate = useNavigate();
  const { Toast } = useShowMutationToast();

  const { mutate } = useMutation({
    mutationFn: (inputForm) => createLectureFn(inputForm),
    onSuccess: () => {
      navigate('/');
      Toast('success', '강의 생성 완료');
    },
  });

  return { mutate };
}
