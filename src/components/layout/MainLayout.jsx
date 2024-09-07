import useGetTokenInQueryCache from '../../hooks/token/use-get-token-in-query-cache.hook.jsx';
import useStoreTokenInQueryCache from '../../hooks/token/use-store-token-in-query-cache.hook.jsx';
import useLogout from '../../features/authentication/hooks/use-logout.hook.jsx';
import { SideMenu } from '../side-menu/index.js';
import { Navbar } from '../navbar/index.js';
import { Footer } from '../footer/index.js';
import { Navigate, Outlet } from 'react-router-dom';
import { ROLE_ADMIN } from '../../constant/role/role-type.const.js';
import { PATH_PRIVATE } from '../../constant/link/PrivateLinks.js';

// Admin 페이지 제외 나머지 페이지에서 사용되는 Container
// 표시할 Navbar, Contents, Footer, SideMenu를 인수로 받음
const Container = ({ Navbar, Contents, Footer, SideMenu }) => {
  return (
    <div className="drawer block">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className={'drawer-content flex h-full flex-col'}>
        {Navbar}
        {Contents}
        {Footer}
      </div>
      {SideMenu}
    </div>
  );
};

export default function MainLayout() {
  const { handleLogout } = useLogout();

  //사이드 메뉴에서, localStorage에 저장되어 있는 토큰 정보를 React-Query캐시에 저장 ( 동기화 )

  //이 컴포넌트에서 토큰과 쿼리캐시 최초로 동기화

  useStoreTokenInQueryCache();
  //React-Query캐시에 있는 토큰 정보를 얻음

  const token = useGetTokenInQueryCache();
  //쿼리 캐시에 저장되어있는 토큰 정보 안에 권한 정보(role)에 접근해 저장
  const role = token?.role || null;

  // 현재 권한이 Admin일 경우, Admin 홈페이지로 리다이렉트
  return role === ROLE_ADMIN ? (
    <Navigate to={PATH_PRIVATE.ADMIN.HOME} />
  ) : (
    <Container
      Navbar={<Navbar role={role} onLogout={handleLogout} />}
      Contents={
        <main className="flex flex-grow flex-col">
          <Outlet />
        </main>
      }
      Footer={<Footer />}
      SideMenu={<SideMenu />}
    />
  );
}
