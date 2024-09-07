import { Link } from 'react-router-dom';

// 링크 연결된 버튼
export default function LinkBtn({ link, text }) {
  return (
    <Link to={link}>
      <button className="btn-ghost btn" type={'button'}>
        {text}
      </button>
    </Link>
  );
}
