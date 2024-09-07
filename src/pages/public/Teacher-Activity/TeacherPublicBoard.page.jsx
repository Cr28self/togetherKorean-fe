import {
  InfoBanner,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { CiViewTable } from 'react-icons/ci';

// 선생님 게시판 페이지
export default function TeacherPublicBoardPage() {
  return (
    <>
      <PublicPageTitle
        icon={<CiViewTable className={'h-10 w-10'} />}
        title={'선생님 게시판'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={[
            '선생님들이 2gether Korean의 선생님에게',
            ' 하고 싶은 말을 올려주세요.',
          ]}
        />
      </InfoBanner>
    </>
  );
}
