import { Link } from 'react-router-dom';

// 로그인시, 프로필 사진을 click하면, 하위에 나타나는 메뉴 List들을 보여주는 컴포넌트
export default function CollasibleProfileMenuList({ title, itemList }) {
  return (
    <>
      <span className={'font-bold'}>{title}</span>
      <ul>
        {itemList.map((item) => (
          <li key={item.link}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
