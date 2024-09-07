import { toast } from 'react-toastify';

//toast알림 띄우는 커스텀훅
const useShowMutationToast = () => {
  const ToastFn = {
    success: (msg) => toast.success(msg),
    error: (msg) => toast.error(msg),
    warn: (msg) => toast.warn(msg),
    info: (msg) => toast.info(msg),
  };

  const Toast = (type, msg) => {
    toast.dismiss();
    ToastFn[type](msg);
  };

  return { Toast };
};

export default useShowMutationToast;
