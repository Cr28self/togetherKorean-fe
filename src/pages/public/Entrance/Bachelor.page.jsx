import {
  LandingContentsLayout,
  LandingContentsSection,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { FaSchool } from 'react-icons/fa';

// 대학 입학 페이지
export default function BachelorPage() {
  return (
    <>
      <PublicPageTitle
        icon={<FaSchool className={'h-10 w-10'} />}
        title={'대학 입학'}
      />
      <LandingContentsSection>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>개요</h3>
              <ul className={'break-keep'}>
                <li className={'font-bold'}>
                  한국 대학을 선택하고, 입학 지원 서류를 준비하는 학생
                </li>
                <li>대학 입학 준비 안내</li>
                <li>상담 신청</li>
                <li>접수</li>
              </ul>
            </>
          }
        />

        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>대학 입학 기본 서류 목록</h3>
              <ul>
                <li className={'font-bold'}>...</li>
              </ul>
            </>
          }
        />
      </LandingContentsSection>
    </>
  );
}
