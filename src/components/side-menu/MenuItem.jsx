import { Link } from 'react-router-dom';

// SideMenu의 각 메뉴 버튼 표시하는 컴포넌트
export default function MenuItem({ linkMenu, publicMenu, iconMenu }) {
  if (linkMenu) {
    return (
      <li className={'font-bold'}>
        <Link to={linkMenu.link}>{linkMenu.text}</Link>
      </li>
    );
  } else if (publicMenu) {
    return (
      <Link to={publicMenu.link}>
        <button className={'btn w-full'}>{publicMenu.text}</button>
      </Link>
    );
  } else if (iconMenu) {
    return <li>{iconMenu.content}</li>;
  } else {
    return null;
  }
}
