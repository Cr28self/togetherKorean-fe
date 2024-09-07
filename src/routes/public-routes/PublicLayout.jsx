import { Outlet } from 'react-router-dom';

// Public 페이지에서 공통적으로 적용되는 Layout
export default function PublicLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
