import {
  LandingContentsLayout,
  LandingContentsSection,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { MdSchool } from 'react-icons/md';
import { GOOGLE_DOCS_ENROLL_LINKS } from '../../../constant/link/External/GoogleDocsLinks.js';

// 대학원 입학 페이지

// 대학원 입학 컨텐츠의 Text Section
const StepContents = ({ title, texts }) => {
  return (
    <p className={'mb-12'}>
      <li>{title}</li>
      {texts.map((text) => (
        <li key={text}>{text}</li>
      ))}
    </p>
  );
};

// 대학원 입학 컨텐츠 마지막 부분의 GoogleDocs링크 버튼
const GoogleDocsLinkBtn = ({ btnColor, docsLink, title }) => {
  return (
    <a href={docsLink} target="_blank" rel="noopener noreferrer">
      <button
        className={`${btnColor} btn w-20 text-xs text-white md:w-40 md:text-base `}
      >
        {title}
      </button>
    </a>
  );
};

export default function MasterPage() {
  return (
    <>
      <PublicPageTitle
        icon={<MdSchool className={'h-10 w-10'} />}
        title={'대학원 입학'}
      />

      <LandingContentsSection>
        <LandingContentsLayout
          sentence={
            <>
              <ul className={'list-none break-keep'}>
                <StepContents
                  title={'Step 1'}
                  texts={[
                    '1-1 컨설턴트 밀착 관리 / 학생 Needs 분석',
                    '학생의 자격 확인 / 학생의 목표 분석',
                  ]}
                />

                <StepContents title={'Step 2'} texts={['계약서 작성']} />
                <StepContents
                  title={'Step 3'}
                  texts={[
                    '학생 기본 정보',
                    '심층 상담 : 한국말 실력, 서류 준비 절차, 중고등학교 성적 확인',
                  ]}
                />

                <StepContents
                  title={'Step 4'}
                  texts={[
                    '1차, 2차, 3차 학교 신청',
                    '자기소개서 / 수학계획서 작성 요령',
                  ]}
                />

                <StepContents
                  title={'Step 5'}
                  texts={['자기소개서 / 수학계획서 1차~4차 피드백']}
                />
                <StepContents title={'Step 6'} texts={['대학 원서 작성']} />

                <StepContents
                  title={'Step 7'}
                  texts={[
                    '면접 준비(추가 비용 총 6시간 400,000원)',
                    '1회 : 면접 예상 질문 및 수정',
                    '2~3회 : 면접 예상 답변 작성 및 수정',
                    '4~5회 : 면접 연습',
                    '6회 : 총 연습',
                  ]}
                />
              </ul>

              {/*  GoogleDocs버튼 그룹들*/}
              <div className={'mt-1 flex gap-2'}>
                <GoogleDocsLinkBtn
                  btnColor={'btn-info'}
                  title={'상담 신청'}
                  docsLink={GOOGLE_DOCS_ENROLL_LINKS.ENTRANCE.MASTER_CONSULT}
                />

                <GoogleDocsLinkBtn
                  btnColor={'btn-error'}
                  title={'등록'}
                  docsLink={GOOGLE_DOCS_ENROLL_LINKS.ENTRANCE.MASTER_ENROLL}
                />
              </div>
            </>
          }
        />
      </LandingContentsSection>
    </>
  );
}
