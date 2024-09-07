import { BurgerIcon } from '../Icon/index.js';

// Admin권한 페이지에서만 사용되는 Navbar
export default function AdminNavbar({ onLogout }) {
  return (
    <nav className="navbar justify-between gap-10 bg-neutral  text-white shadow">
      {/*<HomeLogo />*/}

      <div>
        Admin
        <label
          htmlFor="my-drawer-2"
          className="btn-neutral drawer-button btn lg:hidden"
        >
          <BurgerIcon />
        </label>
      </div>

      <button className={'btn-error btn'} onClick={onLogout}>
        logout
      </button>
    </nav>
  );
}
