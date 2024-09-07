import useCheckRole from '../../hooks/use-check-role.hook.jsx';
import { ROLE_TEACHER } from '../../constant/role/role-type.const.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import TeacherProfileHomePage from '../../pages/private/teacher/TeacherProfileHome.page.jsx';

import { PATH_AUTH } from '../../constant/link/AuthLinks.js';
import { PATH_PRIVATE } from '../../constant/link/PrivateLinks.js';
import LectureInfoPage from '../../pages/private/teacher/lecture-management/LectureInfo.page.jsx';
import LearnerRewritePage from '../../pages/admin/learner-management/LearnerRewrite.page.jsx';
import LectureCreatePage from '../../pages/private/teacher/lecture-management/LectureCreate.page.jsx';

//Teacher으로 로그인했을 경우 활성화되는 Teacher전용 Route
export default function TeacherRoute() {
  const { checkRole } = useCheckRole(ROLE_TEACHER);

  const navigate = useNavigate();

  //현재 로그인되어있는 User의 정보를 이용해서 권한 판단
  useEffect(() => {
    if (!checkRole()) {
      //거부되면 Denined 페이지로 리다이렉트
      navigate(PATH_AUTH.DENIED);
    }
  }, []);

  return (
    <>
      <Routes>
        {/*    '/teacher/*' */}
        {checkRole() && (
          <>
            <Route index element={<TeacherProfileHomePage />} />
            <Route
              path={PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.INFO.ROUTE}
              element={<LectureInfoPage />}
            />
            <Route
              path={PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.INPUT_FORM.ROUTE}
              element={<LearnerRewritePage />}
            />
            <Route
              path={PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.CREATE.ROUTE}
              element={<LectureCreatePage />}
            />
            <Route path={'*'} element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
