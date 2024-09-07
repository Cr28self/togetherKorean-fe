import { Link } from 'react-router-dom';
import { PATH_PRIVATE } from '../../constant/link/PrivateLinks.js';

// Admin전용 SideMenu
export default function AdminSideMenu() {
  return (
    <div className="drawer-side ">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu h-full w-60 bg-neutral  p-4 text-white">
        {/* Sidebar content here */}
        <li className={'btn-neutral btn'}>
          <Link to={PATH_PRIVATE.ADMIN.HOME} className={'hover:text-white'}>
            Dashboard
          </Link>
        </li>
        <li className={'btn-neutral btn'}>
          <Link
            to={PATH_PRIVATE.ADMIN.LEARNER_MANAGEMENT.INFO.LINKS}
            className={'hover:text-white'}
          >
            학습자 개인정보
          </Link>
        </li>
        <li className={'btn-neutral btn'}>
          <Link
            to={PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.INFO.LINKS}
            className={'hover:text-white'}
          >
            강의자 개인정보
          </Link>
        </li>
        <li className={'btn-neutral btn'}>
          <a className={'hover:text-white'}>계약서 관리</a>
        </li>
      </ul>
    </div>
  );
}
