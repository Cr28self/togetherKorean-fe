import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import BachelorPage from '../../pages/public/Entrance/Bachelor.page.jsx';
import MasterPage from '../../pages/public/Entrance/Master.page.jsx';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

//Public메뉴의 대학.대학원 입학 Route
export default function EntranceRoute() {
  return (
    <>
      <Routes>
        {/*    '/class/*' */}
        {/*  대학 입학 페이지*/}
        <Route index element={<BachelorPage />} />

        {/*  대학원 입학 페이지*/}
        <Route
          path={PATH_PUBLIC.ENTRANCE.MASTER.ROUTE}
          element={<MasterPage />}
        />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
