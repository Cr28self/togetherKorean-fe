import { Navigate, Outlet } from 'react-router-dom';
import useGetTokenInQueryCache from '../../hooks/token/use-get-token-in-query-cache.hook.jsx';
import { ROLE_ADMIN } from '../../constant/role/role-type.const.js';
import { PATH_PRIVATE } from '../../constant/link/PrivateLinks.js';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

export default function AuthLayout() {
  const token = useGetTokenInQueryCache();
  //쿼리 캐시에 저장되어있는 토큰 정보 안에 권한 정보(role)에 접근해 저장
  const role = token?.role || null;

  if (!role) {
    return (
      <div className={'my-10'}>
        <Outlet />
      </div>
    );
  } else {
    if (role === ROLE_ADMIN) {
      return <Navigate to={PATH_PRIVATE.ADMIN.HOME} />;
    } else {
      return <Navigate to={PATH_PUBLIC.HOME} />;
    }
  }
}
