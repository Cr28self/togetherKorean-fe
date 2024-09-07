import { Link } from 'react-router-dom';
import { Modal } from '../modal/index.js';
import { useState } from 'react';

// 테이블에서 사용되어지는 Cell 수정 / 삭제 버튼
// type : update/delete
export default function TableActionBtn({ type, text, updateLink, deleteFn }) {
  // 모달 ON/OFF
  const [showModal, setShowModal] = useState(false);

  // 수정 버튼 표시
  return type === 'update' ? (
    <Link to={updateLink}>
      <button className={'btn-info btn-outline btn-sm btn px-1 md:px-3'}>
        {text}
      </button>
    </Link>
  ) : (
    //   삭제 버튼 표시
    <>
      <button
        className={'btn-outline btn-error btn-sm btn px-1 md:px-3'}
        onClick={() => setShowModal(true)}
      >
        {text}
      </button>
      {showModal && (
        //   OnDoing : 모달 닫고 deleteFn()실행
        <Modal
          title={'삭제'}
          message={'삭제하시겠습니까?'}
          onDoing={() => {
            setShowModal(false);
            deleteFn();
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
