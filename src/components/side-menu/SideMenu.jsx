import { Link } from 'react-router-dom';
import { CloseIcon } from '../Icon/index.js';
import CollasibleMenuItemList from './CollasibleMenuItemList.jsx';
import { SideMenuCloseBtn } from '../button/index.js';
import MenuItem from './MenuItem.jsx';
import { PUBLIC_MENU_LIST_ARRAY } from '../../constant/link/PublicMenuList.js';

// Admin 관련된 페이지 제외 나머지 모든 페이지에서 보여지는 SideMenu
// SideMenu는 모바일 환경에서 Hamburger버튼 클릭하면 보여짐
// Desktop 화면에서는 안보임
export default function SideMenu() {
  return (
    <div className="drawer-side z-50">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      {/*Collasp Menu List */}
      <ul className="menu flex h-full w-fit flex-col flex-nowrap gap-1 overflow-auto bg-base-100 text-[12px] sm:w-60 sm:text-[14px] md:w-80">
        {/*close Icon */}

        <MenuItem
          iconMenu={{ content: <SideMenuCloseBtn icon={<CloseIcon />} /> }}
        />

        {/*Start Contents*/}

        {/*  공통 사이드 메뉴 */}

        <div className={'h-full overflow-auto'}>
          {PUBLIC_MENU_LIST_ARRAY.map((item) => {
            return (
              <CollasibleMenuItemList
                key={item.MAIN_TITLE}
                title={item.MAIN_TITLE}
                itemList={item.itemList.map((menuItem) => {
                  return (
                    <Link key={menuItem.link} to={menuItem.link}>
                      {menuItem.title}
                    </Link>
                  );
                })}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
}
