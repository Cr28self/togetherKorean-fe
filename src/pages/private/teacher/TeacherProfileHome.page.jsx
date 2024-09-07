import useGetLoggedInUserInfo from '../../../features/users-management/hooks/use-get-logged-in-user-info.hook.jsx';
import { PageTitle } from '../../../components/title/index.js';

//Teacher로 로그인했을 경우, Teacher HomePage
export default function TeacherProfileHomePage() {
  const { data } = useGetLoggedInUserInfo('teacher');

  return <PageTitle>Teacher HOME</PageTitle>;
}
