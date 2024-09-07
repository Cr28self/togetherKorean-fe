import { Navigate, Outlet } from 'react-router-dom';
import useLogout from '../../features/authentication/hooks/use-logout.hook.jsx';
import useStoreTokenInQueryCache from '../../hooks/token/use-store-token-in-query-cache.hook.jsx';
import useGetTokenInQueryCache from '../../hooks/token/use-get-token-in-query-cache.hook.jsx';
import { ROLE_ADMIN } from '../../constant/role/role-type.const.js';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';
import { Footer } from '../../components/footer/index.js';
import AdminNavbar from '../../components/navbar/AdminNavbar.jsx';
import AdminSideMenu from '../../components/side-menu/AdminSideMenu.jsx';

// Admin 관련 페이지를 공통적으로 구성하는 Container
// 사용할 Navbar, Contents, Footer, SideMenu를 인수로 받음
const AdminContainer = ({ Navbar, Contents, Footer, SideMenu }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex w-full flex-col items-center justify-center">
        {Navbar}
        {Contents}
        {Footer}
      </div>
      {SideMenu}
    </div>
  );
};

export default function AdminLayout() {
  //사이드 메뉴에서, localStorage에 저장되어 있는 토큰 정보를 React-Query캐시에 저장 ( 동기화 )

  //이 컴포넌트에서 토큰과 쿼리캐시 최초로 동기화

  const { handleLogout } = useLogout();
  useStoreTokenInQueryCache();
  //React-Query캐시에 있는 토큰 정보를 얻음

  const token = useGetTokenInQueryCache();
  //쿼리 캐시에 저장되어있는 토큰 정보 안에 권한 정보(role)에 접근해 저장
  const role = token?.role || null;

  // 현재 권한이 Admin일 경우 <AdminContainer /> 표시
  // 현재 권한이 Admin이 아닐 경우 홈페이지로 리다이렉트
  return role === ROLE_ADMIN ? (
    <AdminContainer
      Navbar={<AdminNavbar onLogout={handleLogout} />}
      Contents={
        <main className="flex flex-grow flex-col">
          <div className={'my-10'}>
            <Outlet />
          </div>
        </main>
      }
      Footer={<Footer />}
      SideMenu={<AdminSideMenu />}
    />
  ) : (
    <Navigate to={PATH_PUBLIC.HOME} />
  );
}
