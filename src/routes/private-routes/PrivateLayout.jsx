import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  return (
    <div className={'my-10 h-full'}>
      <Outlet />
    </div>
  );
}
