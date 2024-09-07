import useCheckRole from '../../hooks/use-check-role.hook.jsx';
import { ROLE_LEARNER } from '../../constant/role/role-type.const.js';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LearnerProfileHomePage from '../../pages/private/learner/LearnerProfileHome.page.jsx';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import { PATH_AUTH } from '../../constant/link/AuthLinks.js';
import { PATH_PRIVATE } from '../../constant/link/PrivateLinks.js';
import LearnerCoursePage from '../../pages/private/learner/LearnerCourse.page.jsx';
import LearnerEnrollPage from '../../pages/private/learner/LearnerEnroll.page.jsx';
import LearnerStudyPlanPage from '../../pages/private/learner/LearnerStudyPlan.page.jsx';
import LearnerAttendancePage from '../../pages/private/learner/LearnerAttendance.page.jsx';

//Learner으로 로그인했을 경우 활성화되는 Learner전용 Route
export default function LearnerRoute() {
  const { checkRole } = useCheckRole(ROLE_LEARNER);

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
        {/*    '/learner/*' */}
        {checkRole() && (
          <>
            <Route index element={<LearnerProfileHomePage />} />
            <Route
              path={PATH_PRIVATE.LEARNER.S_PLAN.ROUTE}
              element={<LearnerStudyPlanPage />}
            />
            <Route
              path={PATH_PRIVATE.LEARNER.COURSE.ROUTE}
              element={<LearnerCoursePage />}
            />
            <Route
              path={PATH_PRIVATE.LEARNER.ENROLL.ROUTE}
              element={<LearnerEnrollPage />}
            />
            <Route
              path={PATH_PRIVATE.LEARNER.ATTENDANCE.ROUTE}
              element={<LearnerAttendancePage />}
            />
            <Route path={'*'} element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
