import { Route, Routes, useNavigate } from 'react-router-dom';
import useCheckRole from '../../hooks/use-check-role.hook.jsx';
import { ROLE_ADMIN } from '../../constant/role/role-type.const.js';
import { lazy, useEffect } from 'react';
import NotFoundPage from '../../pages/NotFound.page.jsx';
import { PATH_AUTH } from '../../constant/link/AuthLinks.js';
import { PATH_PRIVATE } from '../../constant/link/PrivateLinks.js';
const TeacherCreatePage = lazy(() =>
  import('../../pages/admin/teacher-management/TeacherCreate.page.jsx'),
);
const TeacherRewritePage = lazy(() =>
  import('../../pages/admin/teacher-management/TeacherRewrite.page.jsx'),
);

const AdminProfileHomePage = lazy(() =>
  import('../../pages/admin/AdminProfileHome.page.jsx'),
);

const LearnerInfoPage = lazy(() =>
  import('../../pages/admin/learner-management/LearnerInfo.page.jsx'),
);

const LearnerRewritePage = lazy(() =>
  import('../../pages/admin/learner-management/LearnerRewrite.page.jsx'),
);

const TeacherInfoPage = lazy(() =>
  import('../../pages/admin/teacher-management/TeacherInfo.page.jsx'),
);

const AnnouncementInfoTable = lazy(() =>
  import('../../features/announcements/components/AnnouncementInfoTable.jsx'),
);

//Admin으로 로그인했을 경우 활성화되는 Admin전용 Route
export default function AdminRoute() {
  const { checkRole } = useCheckRole(ROLE_ADMIN);
  const navigate = useNavigate();

  //현재 로그인되어있는 User의 정보를 이용해서 권한 판단
  useEffect(() => {
    if (!checkRole()) {
      console.log('first?');
      //거부되면 Denined 페이지로 리다이렉트
      navigate(PATH_AUTH.DENIED);
    }
  }, []);

  return (
    <>
      <Routes>
        {/* '/admin/* ' */}
        {checkRole() && (
          <>
            <Route index element={<AdminProfileHomePage />} />
            <Route
              path={PATH_PRIVATE.ADMIN.LEARNER_MANAGEMENT.INFO.ROUTE}
              element={<LearnerInfoPage />}
            />
            <Route
              path={PATH_PRIVATE.ADMIN.LEARNER_MANAGEMENT.INPUT_FORM.ROUTE}
              element={<LearnerRewritePage />}
            />
            <Route
              path={PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.INFO.ROUTE}
              element={<TeacherInfoPage />}
            />
            <Route
              path={PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.CREATE.ROUTE}
              element={<TeacherCreatePage />}
            />
            <Route
              path={PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.INPUT_FORM.ROUTE}
              element={<TeacherRewritePage />}
            />
            <Route
              path={PATH_PRIVATE.ADMIN.ANNOUNCEMENT.INFO.ROUTE}
              element={<AnnouncementInfoTable />}
            />
            <Route path={'*'} element={<NotFoundPage />} />
          </>
        )}
      </Routes>
    </>
  );
}
