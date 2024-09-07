import { createPortal } from 'react-dom';

// 모달을 감싸는 컨테이너
export default function ModalContainer({ children }) {
  return createPortal(<>{children}</>, document.getElementById('modal-root'));
}
