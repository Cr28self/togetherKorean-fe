import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import GuideHomePage from '../../pages/public/Guide/GuideHome.page.jsx';
import GuideTeacherPage from '../../pages/public/Guide/GuideTeacher.page.jsx';
import GuideLocationPage from '../../pages/public/Guide/GuideLocation.page.jsx';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

//Public 메뉴의 TogetherKorean 안내 Route
export default function GuideRoute() {
  return (
    <>
      <Routes>
        {/*    '/guide/*' */}
        {/*TogegherKorean 소개 페이지*/}
        <Route index element={<GuideHomePage />} />

        {/*선생님 소개 페이지*/}
        <Route
          path={PATH_PUBLIC.GUIDE.TEACHER.ROUTE}
          element={<GuideTeacherPage />}
        />

        {/*찾아오시는 길 페이지*/}
        <Route
          path={PATH_PUBLIC.GUIDE.LOCATION.ROUTE}
          element={<GuideLocationPage />}
        />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
