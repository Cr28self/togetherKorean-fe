import useGetLoggedInUserInfo from '../../../features/users-management/hooks/use-get-logged-in-user-info.hook.jsx';
import { InfoCard } from '../../../components/card/index.js';
import { PageTitle } from '../../../components/title/index.js';
//학습자로 로그인했을 경우 Home화면
export default function LearnerProfileHomePage() {
  const { data } = useGetLoggedInUserInfo('learner');

  return (
    <>
      <PageTitle>Learner HOME</PageTitle>
      <div className={'p-10'}>
        <InfoCard userInfoData={data} />
      </div>
    </>
  );
}
