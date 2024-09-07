import ModalContainer from './ModalContainer.jsx';
import { useRef } from 'react';
import useOutSideClick from '../../hooks/use-outside-click.hook.jsx';

export default function Modal({ title, message, onClose, onDoing }) {
  const modalRef = useRef(null);
  // 모달 닫히는 함수
  const handleClose = () => {
    onClose?.();
  };

  const handleDoing = () => {
    onDoing?.();
  };

  // 모달 바깥쪽 영역 click하면, 모달 닫히는 기능 ( 커스텀훅 )
  useOutSideClick(modalRef, handleClose);

  return (
    <ModalContainer>
      <section
        className={
          'fixed bottom-0 left-0 right-0 top-0 z-50 h-full w-full bg-[rgba(0,0,0,0.2)]'
        }
      >
        <div
          className="card fixed left-1/2 top-1/2 w-56 translate-x-[-50%] translate-y-[-50%] bg-base-100 shadow-xl
            sm:w-72
            md:w-96
        "
          ref={modalRef}
        >
          <div className="card-body">
            {/*모달 제목*/}
            <h2 className="card-title">{title}</h2>
            {/*모달 메시지 ( 내용 )*/}
            <p>{message}</p>

            {/*버튼 Section*/}
            <div className="card-actions justify-end">
              {/*확인 버튼*/}
              <button className="btn-info btn" onClick={handleDoing}>
                확인
              </button>
              {/*취소 버튼 */}
              <button className="btn-error btn" onClick={handleClose}>
                취소
              </button>
            </div>
          </div>
        </div>
      </section>
    </ModalContainer>
  );
}
