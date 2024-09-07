import { Link } from 'react-router-dom';
import { BurgerIcon } from '../Icon/index.js';
import { LinkBtn, NavbarBtn } from '../button/index.js';
import CollasibleNavbarItemList from './CollasibleNavbarItemList.jsx';
import {
  ROLE_ADMIN,
  ROLE_LEARNER,
  ROLE_TEACHER,
} from '../../constant/role/role-type.const.js';
import { CollasibleProfileMenuList, ProfileMenu } from './index.js';
import HomeLogo from './HomeLogo.jsx';
import {
  PROFILE_MENU_LINKS_ADMIN,
  PROFILE_MENU_LINKS_LEARNER,
  PROFILE_MENU_LINKS_TEACHER,
} from '../../constant/link/ProfileMenuLinks.js';

import { PUBLIC_MENU_LIST_ARRAY } from '../../constant/link/PublicMenuList.js';
import { PATH_AUTH } from '../../constant/link/AuthLinks.js';
import { SelectLangForm } from '../form/index.js';

// Admin관련 페이지를 제외한 나머지 모든 곳에서 사용되는 Navbar
export default function Navbar({ role, onLogout }) {
  return (
    <nav className="navbar justify-between gap-10 bg-white shadow">
      {/*로고*/}
      <HomeLogo />

      {/*  Menu area*/}
      <div className="flex-grow-1 flex w-full flex-col items-end">
        <SelectLangForm />
        {/*권한 X일때 Navbar에 표시되는 메뉴 -> 로그인 버튼만 표시됨*/}
        {!role && <LinkBtn link={PATH_AUTH.LOGIN} text={'로그인'} />}

        {role === ROLE_ADMIN && (
          <ProfileMenu
            profileLink={PROFILE_MENU_LINKS_ADMIN.PROFILE_LINK}
            menuItems={[
              <CollasibleProfileMenuList
                title={'학습자'}
                itemList={PROFILE_MENU_LINKS_ADMIN.LEARNER_LIST}
              />,

              <CollasibleProfileMenuList
                title={'강의자'}
                itemList={PROFILE_MENU_LINKS_ADMIN.TEACHER_LIST}
              />,
            ]}
            onLogout={onLogout}
          />
        )}

        {/*강의자 권한일 경우 Nabvar에 표시되는 프로필 메뉴 내용*/}
        {role === ROLE_TEACHER && (
          <ProfileMenu
            profileLink={PROFILE_MENU_LINKS_TEACHER.PROFILE_LINK}
            menuItems={PROFILE_MENU_LINKS_TEACHER.MENU_LIST.map((menuItem) => {
              return (
                <Link key={menuItem.link} to={menuItem.link}>
                  {menuItem.text}
                </Link>
              );
            })}
            onLogout={onLogout}
          />
        )}

        {/*학습자 권한일경우 Navbar에 표시되는 프로필 메뉴 내용*/}
        {role === ROLE_LEARNER && (
          <ProfileMenu
            profileLink={PROFILE_MENU_LINKS_LEARNER.PROFILE_LINK}
            menuItems={PROFILE_MENU_LINKS_LEARNER.MENU_LIST.map((menuItem) => {
              return (
                <Link key={menuItem.link} to={menuItem.link}>
                  {menuItem.text}
                </Link>
              );
            })}
            onLogout={onLogout}
          />
        )}

        {/*  Divider */}
        <div className={'divider my-0 hidden lg:flex '}></div>

        {/*  Main Menu*/}
        {/* 모든 사용자에게 보여짐*/}
        <div className={'lg:w-full'}>
          <label
            htmlFor="my-drawer-3"
            className="btn-ghost btn-square btn lg:hidden"
          >
            {/* hamburger Icon */}
            <BurgerIcon />
          </label>

          {/*  MenuButton Area*/}
          <div className={'hidden lg:flex'}>
            {PUBLIC_MENU_LIST_ARRAY.map((item) => {
              return (
                <NavbarBtn key={item.MAIN_TITLE} title={item.MAIN_TITLE}>
                  <CollasibleNavbarItemList
                    navItems={item.itemList.map((menuItem) => {
                      return {
                        link: menuItem.link,
                        title: menuItem.title,
                      };
                    })}
                  />
                </NavbarBtn>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
