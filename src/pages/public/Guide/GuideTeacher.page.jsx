import {
  LandingContentsLayout,
  LandingContentsSection,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { GiTeacher } from 'react-icons/gi';

import { FaChalkboardTeacher } from 'react-icons/fa';

// 선생님 소개 페이지
export default function GuideTeacherPage() {
  return (
    <>
      <PublicPageTitle
        icon={<GiTeacher className={'h-10 w-10'} />}
        title={'선생님 소개'}
      />

      <div>
        <LandingContentsSection>
          <LandingContentsLayout
            icon={<FaChalkboardTeacher className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>김제열</h2>
                <div>경희대학교 국어학박사 수료</div>
                <div>연세대학교 한국어학당 25년 근무</div>
                <div> 이메일(kimje@yonsei.ac.kr) </div>
              </>
            }
          />

          <LandingContentsLayout
            icon={<FaChalkboardTeacher className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>강은정</h2>
                <div>고려대학교 일어일문학박사 수료</div>
                <div>연세대학교 한국어학당 16년 근무</div>
                <div> 이메일(mathc@yonsei.ac.kr)</div>
              </>
            }
          />
        </LandingContentsSection>
      </div>
    </>
  );
}
