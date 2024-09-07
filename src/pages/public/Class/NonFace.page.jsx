import {
  ClassTable,
  InfoBanner,
  LandingContentsLayout,
  LandingContentsSection,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { TbBrandZoom } from 'react-icons/tb';
import { CLASS_TABLE_TYPE } from '../../../features/landing/constants/ClassTableConst.js';
import { GOOGLE_DOCS_ENROLL_LINKS } from '../../../constant/link/External/GoogleDocsLinks.js';
import { Link } from 'react-router-dom';

// 비대면 수업 게시판 밑에 버튼 목록 그룹들 ( 수강신청 / 질의 응답 )
const CourseTableBtnGroup = ({ enrollLink, questionSubject }) => {
  return (
    <div className={'mt-1 flex gap-2'}>
      {/*  수강 신청버튼 - GoogleDocs링크로 이동됨 */}
      <a href={enrollLink} target="_blank" rel="noopener noreferrer">
        <button className={'btn-info btn  text-white'}>수강 신청</button>
      </a>

      {/*  질의 응답 버튼 - 해당 비대면 강의에 대한 질의 응답 게시판으로 이동 */}
      <Link to={`/class/question/board/${questionSubject}`}>
        <button className={'btn-error btn text-white'}>질의 응답</button>
      </Link>
    </div>
  );
};

// 비대면 수업 페이지
export default function NonFacePage() {
  return (
    <>
      <PublicPageTitle
        icon={<TbBrandZoom className={'h-10 w-10'} />}
        title={'비대면 수업'}
      />

      {/*  비대면 수업 페이지 배너 */}
      <InfoBanner>
        <LineBreakResSentence
          paragraph={['ZOOM meeting을 이용한', ' 실시간 Live 수업']}
        />
      </InfoBanner>

      {/*  start of TOPIK2 준비반 Section*/}
      <LandingContentsSection
        title={<LineBreakResSentence paragraph={['TOPIK2 준비반']} />}
      >
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>TOPIK2 한국어 읽기반</h3>

              <ClassTable
                tableTitle={'수업 안내 및 교재'}
                headData={['분류', '  ']}
                bodyData={CLASS_TABLE_TYPE.TOPIK_READING}
              />
              <CourseTableBtnGroup
                enrollLink={GOOGLE_DOCS_ENROLL_LINKS.NON_FACE.TOPIK_READING}
                questionSubject={'topicReading'}
              />
            </>
          }
        />

        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>TOPIK2 한국어 듣기반</h3>

              <ClassTable
                tableTitle={'수업 안내 및 교재'}
                headData={['분류', '  ']}
                bodyData={CLASS_TABLE_TYPE.TOPIK_LISTENING}
              />
              <CourseTableBtnGroup
                enrollLink={GOOGLE_DOCS_ENROLL_LINKS.NON_FACE.TOPIK_LISTENING}
                questionSubject={'topicListening'}
              />
            </>
          }
        />

        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>TOPIK2 한국어 쓰기반</h3>

              <ClassTable
                tableTitle={'수업 안내 및 교재'}
                headData={['분류', '  ']}
                bodyData={CLASS_TABLE_TYPE.TOPIK_WRITING}
              />
              <CourseTableBtnGroup
                enrollLink={GOOGLE_DOCS_ENROLL_LINKS.NON_FACE.TOPIK_WRITING}
                questionSubject={'topicWriting'}
              />
            </>
          }
        />
      </LandingContentsSection>
      {/*  end of TOPIK2 준비반 Section*/}

      {/*  Divider(구분선)*/}
      <div className={'divider my-10'}></div>

      {/*  start of 한국어 말하기 집중반 Section*/}
      <LandingContentsSection
        title={<LineBreakResSentence paragraph={['한국어 말하기 집중반']} />}
      >
        {/*  Speaking Basic*/}
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>한국어 말하기 집중 초급</h3>

              <ClassTable
                tableTitle={'수업 안내 및 교재'}
                headData={['분류', '  ']}
                bodyData={CLASS_TABLE_TYPE.SPEAKING_BASIC}
              />
              <CourseTableBtnGroup
                enrollLink={GOOGLE_DOCS_ENROLL_LINKS.NON_FACE.SPEAKING_BASIC}
                questionSubject={'speakingBasic'}
              />
            </>
          }
        />

        {/*  Speaking Intermediate*/}
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>한국어 말하기 집중 중급</h3>

              <ClassTable
                tableTitle={'수업 안내 및 교재'}
                headData={['분류', '  ']}
                bodyData={CLASS_TABLE_TYPE.SPEAKING_INTERMEDIATE}
              />
              <CourseTableBtnGroup
                enrollLink={
                  GOOGLE_DOCS_ENROLL_LINKS.NON_FACE.SPEAKING_INTERMEDIATE
                }
                questionSubject={'speakingIntermediate'}
              />
            </>
          }
        />

        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <h3 className={'mt-0'}>한국어 말하기 집중 고급</h3>

              <ClassTable
                tableTitle={'수업 안내 및 교재'}
                headData={['분류', '  ']}
                bodyData={CLASS_TABLE_TYPE.SPEAKING_EXPERT}
              />
              <CourseTableBtnGroup
                enrollLink={GOOGLE_DOCS_ENROLL_LINKS.NON_FACE.SPEAKING_EXPERT}
                questionSubject={'speakingExpert'}
              />
            </>
          }
        />
      </LandingContentsSection>

      {/*  end of 한국어 말하기 집중반 Section*/}
    </>
  );
}
