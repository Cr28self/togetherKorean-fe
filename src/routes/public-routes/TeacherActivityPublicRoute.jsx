import { Route, Routes } from 'react-router-dom';

import NotFoundPage from '../../pages/NotFound.page.jsx';
import TeacherJocSearchPage from '../../pages/public/Teacher-Activity/TeacherJocSearch.page.jsx';
import TeacherNotificationPage from '../../pages/public/Teacher-Activity/TeacherNotification.page.jsx';
import TeacherPublicBoardPage from '../../pages/public/Teacher-Activity/TeacherPublicBoard.page.jsx';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

//Public 메뉴의 선생님 활동 Route
export default function TeacherActivityPublicRoute() {
  return (
    <>
      <Routes>
        {/*구직 요청 페이지*/}
        <Route index element={<TeacherJocSearchPage />} />

        {/*선생님 공지 페이지*/}
        <Route
          path={PATH_PUBLIC.TEACHER_ACTIVITY.NOTIFICATION.ROUTE}
          element={<TeacherNotificationPage />}
        />

        {/*선생님 게시판 페이지*/}
        <Route
          path={PATH_PUBLIC.TEACHER_ACTIVITY.BOARD.ROUTE}
          element={<TeacherPublicBoardPage />}
        />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
