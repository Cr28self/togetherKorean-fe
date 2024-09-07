import { Link } from 'react-router-dom';

// 로그인해야 보여지는 프로필 메뉴 컴포넌트
export default function ProfileMenu({ profileLink, onLogout, menuItems }) {
  return (
    <div className="flex-none">
      <div className="dropdown-end dropdown">
        {/*  Profile Info Img*/}
        <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
          <div className="placeholder avatar">
            <div className="w-8 rounded-full bg-neutral-focus text-neutral-content">
              <span className="text-xs">AA</span>
            </div>
          </div>
        </label>

        {/*  Profile Menu */}
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            {/*사용자 프로필로 이동하는 링크*/}
            <Link to={profileLink} className="justify-between font-bold">
              Profile
            </Link>
          </li>

          {/*현재 로그인된 권한에 따라 보여지는 메뉴들 */}
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}

          {/*로그아웃 버튼*/}
          <li onClick={onLogout}>
            <a className={'font-bold'}>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
