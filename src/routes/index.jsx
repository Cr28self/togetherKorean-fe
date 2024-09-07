import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/public/Home.page.jsx';
import { PATH_PUBLIC } from '../constant/link/PublicLinks.js';
import { lazy, Suspense } from 'react';
import { MainLayout } from '../components/layout/index.js';
import TeacherActivityPublicRoute from './public-routes/TeacherActivityPublicRoute.jsx';
import NotifyRoute from './public-routes/NotifyRoute.jsx';
import { PATH_AUTH } from '../constant/link/AuthLinks.js';
import { PATH_PRIVATE } from '../constant/link/PrivateLinks.js';
import { LoadingIndicator } from '../components/indicator/index.js';
import AuthLayout from './auth-routes/AuthLayout.jsx';
import PrivateLayout from './private-routes/PrivateLayout.jsx';
import PublicLayout from './public-routes/PublicLayout.jsx';
import AdminLayout from './admin-routes/AdminLayout.jsx';
const LoginPage = lazy(() => import('../pages/auth/Login.page.jsx'));
const RegisterPage = lazy(() => import('../pages/auth/Register.page.jsx'));

const TeacherRoute = lazy(() => import('./private-routes/TeacherRoute.jsx'));
const LearnerRoute = lazy(() => import('./private-routes/LearnerRoute.jsx'));
const AdminRoute = lazy(() => import('./admin-routes/AdminRoute.jsx'));

const GuideRoute = lazy(() => import('./public-routes/GuideRoute.jsx'));

const ClassRoute = lazy(() => import('./public-routes/ClassRoute.jsx'));
const EntranceRoute = lazy(() => import('./public-routes/EntranceRoute.jsx'));
const LearnerActivityPublicRoute = lazy(() =>
  import('./public-routes/LearnerActivityPublicRoute.jsx'),
);

const NotFoundPage = lazy(() => import('../pages/NotFound.page.jsx'));
const DeniedRolePage = lazy(() => import('../pages/DeniedRole.page.jsx'));

//모든 페이지의 라우팅을 관리하는 Route 컴포넌트
export default function AppRoutes() {
  // 여기서 모든 컨텐츠가 불러와짐!!

  return (
    // Suspense 관리 ( 로딩 시 보여줄 LoadingIndicator 컴포넌트 )
    <Suspense fallback={<LoadingIndicator />}>
      <Routes>
        {/* Admin관련 페이지를 제외한 모든 페이지에서 공통적으로 적용되는 Main 레이아웃 */}
        <Route element={<MainLayout />}>
          {/* 홈페이지 */}
          <Route path={PATH_PUBLIC.HOME} element={<HomePage />} />

          {/*누구나 접근 가능한 권한(public)에서 공통적으로 적용되는 Public 레이아웃*/}
          <Route element={<PublicLayout />}>
            <Route
              path={`${PATH_PUBLIC.GUIDE.INDEX.LINKS}/*`}
              element={<GuideRoute />}
            />
            <Route
              path={`${PATH_PUBLIC.CLASS.INDEX.LINKS}/*`}
              element={<ClassRoute />}
            />
            <Route
              path={`${PATH_PUBLIC.ENTRANCE.INDEX.LINKS}/*`}
              element={<EntranceRoute />}
            />

            <Route
              path={`${PATH_PUBLIC.LEARNER_ACTIVITY.INDEX.LINKS}/*`}
              element={<LearnerActivityPublicRoute />}
            />
            <Route
              path={`${PATH_PUBLIC.TEACHER_ACTIVITY.INDEX.LINKS}/*`}
              element={<TeacherActivityPublicRoute />}
            />

            <Route
              path={`${PATH_PUBLIC.NOTIFY.INDEX.LINKS}/*`}
              element={<NotifyRoute />}
            />
          </Route>

          {/* 사용자 인증 관련 페이지에서 공통적으로 적용되는 Auth Layout*/}
          <Route element={<AuthLayout />}>
            {/*로그인 페이지*/}
            <Route path={PATH_AUTH.LOGIN} element={<LoginPage />} />

            {/*회원가입 페이지*/}
            <Route path={PATH_AUTH.REGISTER} element={<RegisterPage />} />
          </Route>

          {/* 로그인한 사용자 ( Learner/Teacher )가 접근 가능한 페이지에서 공통적으로 적용되는 Private 레이아웃*/}
          {/* Admin은 따로 관리함*/}
          <Route element={<PrivateLayout />}>
            {/* 학습자로 로그인한 경우, 접근 가능한 Route */}
            <Route
              path={`${PATH_PRIVATE.LEARNER.HOME}/*`}
              element={<LearnerRoute />}
            />

            {/* 강의자로 로그인한 경우, 접근 가능한 Route */}
            <Route
              path={`${PATH_PRIVATE.TEACHER.HOME}/*`}
              element={<TeacherRoute />}
            />
          </Route>
        </Route>

        {/* Admin관련 페이지에서 공통적으로 적용되는 Admin 레이아웃 */}
        <Route element={<AdminLayout />}>
          {/*Admin으로 로그인했을 경우 접근 가능한 Route*/}
          <Route
            path={`${PATH_PRIVATE.ADMIN.HOME}/*`}
            element={<AdminRoute />}
          />
        </Route>

        {/*권한이 필요한 페이지에서 접속했을때, 권한이 없거나, 적절하지 않은 권한일 경우, DeniedRolePage로 리다이렉트 됨..*/}
        <Route path={PATH_AUTH.DENIED} element={<DeniedRolePage />} />

        {/* 유효하지 않은 url 경로에 접근했을 경우, NotFoundPage로 리다이렉트 됨*/}
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
