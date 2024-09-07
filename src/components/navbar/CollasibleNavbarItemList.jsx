import { Link } from 'react-router-dom';

// Nabar의 메뉴의 하위 메뉴 List들을 표시하기 위한 컴포넌트
export default function CollasibleNavbarItemList({ navItems }) {
  return (
    <>
      {navItems.map((navItem) => (
        <li key={navItem.link}>
          <Link to={navItem.link}>{navItem.title}</Link>
        </li>
      ))}
    </>
  );
}
