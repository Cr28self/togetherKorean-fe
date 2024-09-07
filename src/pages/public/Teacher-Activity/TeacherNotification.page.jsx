import {
  InfoBanner,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { AiOutlineNotification } from 'react-icons/ai';
// 선생님 공지 페이지
export default function TeacherNotificationPage() {
  return (
    <>
      <PublicPageTitle
        icon={<AiOutlineNotification className={'h-10 w-10'} />}
        title={'선생님 공지'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={['2gether Korean에서', ' 선생님들에게 알리는 글입니다.']}
        />
      </InfoBanner>
    </>
  );
}
