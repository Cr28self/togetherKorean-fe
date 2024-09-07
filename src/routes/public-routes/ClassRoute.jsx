import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import NonFacePage from '../../pages/public/Class/NonFace.page.jsx';
import FacePage from '../../pages/public/Class/Face.page.jsx';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';
import ClassQuestionPage from '../../pages/public/Class/ClassQuestion.page.jsx';

//Public 메뉴의 한국어 수업 Route
export default function ClassRoute() {
  return (
    <>
      <Routes>
        {/*    '/class/*' */}
        {/*대면 수업 페이지 Route*/}
        <Route index element={<FacePage />} />
        <Route
          path={PATH_PUBLIC.CLASS.NON_FACE.ROUTE}
          element={<NonFacePage />}
        />
        {/*비대면 수업 페이지 Route*/}
        <Route
          path={'/question/board/:subject'}
          element={<ClassQuestionPage />}
        />

        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
