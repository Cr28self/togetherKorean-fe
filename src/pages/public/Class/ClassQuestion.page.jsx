import {
  ClassTable,
  InfoBanner,
  LandingContentsLayout,
  LandingContentsSection,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { TbBrandZoom } from 'react-icons/tb';
import { Link, useParams } from 'react-router-dom';

// 비대면 강의의 질의응답 게시판 이름들
const boardName = {
  topicReading: 'TOPIK2 한국어 읽기반',
  topicListening: 'TOPIK2 한국어 듣기반',
  topicWriting: 'TOPIK2 한국어 쓰기반',
  speakingBasic: '한국어 말하기 집중 초급',
  speakingIntermediate: '한국어 말하기 집중 중급',
  speakingExpert: '한국어 말하기 집중 고급',
};

// 비대면 강의 질의응답 게시판 페이지
export default function ClassQuestionPage() {
  const { subject } = useParams();
  // 비대면 강의의 질의응답 버튼 클릭하면, 파라미터로 값 넘어와서, 이를 이용해 게시판 이름 동적으로 지정함

  return (
    <>
      <PublicPageTitle
        icon={<TbBrandZoom className={'h-10 w-10'} />}
        title={'비대면 수업'}
      />

      {/*  페이지 배너 */}
      <InfoBanner>
        <LineBreakResSentence
          paragraph={['ZOOM meeting을 이용한', ' 실시간 Live 수업']}
        />
      </InfoBanner>

      <LandingContentsSection
        title={<LineBreakResSentence paragraph={['질의 응답 게시판']} />}
      >
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <ClassTable
                tableTitle={boardName[subject]}
                headData={['번호', '제목', '작성자', '작성일']}
              />

              <div className={'mt-2 flex w-full justify-end'}>
                <Link to={`/`}>
                  <button className={'btn-error btn text-white'}>
                    질의 응답
                  </button>
                </Link>
              </div>
            </>
          }
        />
      </LandingContentsSection>
    </>
  );
}
