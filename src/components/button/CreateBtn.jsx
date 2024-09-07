import { Link } from 'react-router-dom';

//Admin에서 Teacher 생성 or Teacher에서 강의 생성시 사용되는 생성 버튼 UI 컴포넌트
export default function CreateBtn({ title, createLink }) {
  return (
    <Link to={createLink}>
      <button className={'btn-primary btn-outline btn'} type={'button'}>
        {title}
      </button>
    </Link>
  );
}
