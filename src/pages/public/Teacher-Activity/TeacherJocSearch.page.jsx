import {
  InfoBanner,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { MdOutlineLocalOffer } from 'react-icons/md';
// 구직 요청 페이지
export default function TeacherJocSearchPage() {
  return (
    <>
      <PublicPageTitle
        icon={<MdOutlineLocalOffer className={'h-10 w-10'} />}
        title={'구직 요청'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={[
            '2gether Korean에서 일하고 싶은 선생님은',
            '   자기의 이력서를 올려 주세요.',
          ]}
        />
      </InfoBanner>
    </>
  );
}
