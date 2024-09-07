import {
  InfoBanner,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { CiViewTable } from 'react-icons/ci';
// 학생활동 자유게시판 페이지
export default function LearnerPublicBoardPage() {
  return (
    <>
      <PublicPageTitle
        icon={<CiViewTable className={'h-10 w-10'} />}
        title={'자유 게시판'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={[
            '2gether Korean의 학생이나',
            ' 선생님에게 하고 싶은 말을 올려주세요.',
          ]}
        />
      </InfoBanner>
    </>
  );
}
