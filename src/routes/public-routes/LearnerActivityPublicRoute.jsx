import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import LearnerQnAPage from '../../pages/public/Learner-Activity/LearnerQnA.page.jsx';
import LearnerPublicBoardPage from '../../pages/public/Learner-Activity/LearnerPublicBoard.page.jsx';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

//Public 메뉴의 학생 활동 Route
export default function LearnerActivityPublicRoute() {
  return (
    <>
      <Routes>
        {/*  Q & A 페이지*/}
        <Route index element={<LearnerQnAPage />} />

        {/*  자유게시판 페이지 */}
        <Route
          path={PATH_PUBLIC.LEARNER_ACTIVITY.BOARD.ROUTE}
          element={<LearnerPublicBoardPage />}
        />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
