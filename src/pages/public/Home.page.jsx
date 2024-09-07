import {
  Board,
  BoardRow,
  PhotoBoard,
  PhotoBoardRow,
} from '../../features/landing/components/board/index.js';
import {
  InsideMenuBtn,
  InsideMenuWrapper,
} from '../../components/inside-menu/index.js';
import {
  LandingContentsLayout,
  LandingContentsSection,
} from '../../features/landing/components/index.js';
import { Link } from 'react-router-dom';
import {
  MOCK_GALLERY_IMG_1,
  MOCK_GALLERY_IMG_2,
  MOCK_GALLERY_IMG_3,
} from '../../features/landing/mock/index.js';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

//모든 User가 접근 가능한 ( Admin제외 ) Main HomePage
export default function HomePage() {
  return (
    <>
      {/*Inside Menu*/}
      <InsideMenuWrapper>
        <InsideMenuBtn
          link={PATH_PUBLIC.GUIDE.INDEX.LINKS}
          text={PATH_PUBLIC.GUIDE.MAIN_TITLE}
        />
        <InsideMenuBtn
          link={PATH_PUBLIC.CLASS.INDEX.LINKS}
          text={PATH_PUBLIC.CLASS.MAIN_TITLE}
        />
        <InsideMenuBtn
          link={PATH_PUBLIC.ENTRANCE.INDEX.LINKS}
          text={PATH_PUBLIC.ENTRANCE.MAIN_TITLE}
        />
        <InsideMenuBtn
          link={PATH_PUBLIC.LEARNER_ACTIVITY.INDEX.LINKS}
          text={PATH_PUBLIC.LEARNER_ACTIVITY.MAIN_TITLE}
        />
        <InsideMenuBtn
          link={PATH_PUBLIC.TEACHER_ACTIVITY.INDEX.LINKS}
          text={PATH_PUBLIC.TEACHER_ACTIVITY.MAIN_TITLE}
        />
        <InsideMenuBtn
          link={PATH_PUBLIC.NOTIFY.INDEX.LINKS}
          text={PATH_PUBLIC.NOTIFY.MAIN_TITLE}
        />
      </InsideMenuWrapper>

      <LandingContentsSection>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <div className={'grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8'}>
              <div>
                <div className={'flex items-center justify-between'}>
                  <h3 className={'my-0'}>공지 사항</h3>
                  <Link to={PATH_PUBLIC.NOTIFY.INDEX.LINKS}>
                    <button className={'btn-xs btn'}>more</button>
                  </Link>
                </div>

                <div className={'divider my-1'}></div>

                <Board>
                  <BoardRow
                    type={'안내 사항'}
                    title={'Lorem ipsum dolor sit amet.'}
                    wdate={'2022.02.10'}
                  />
                  <BoardRow
                    type={'이용 안내'}
                    title={'Neque porro quisquam...'}
                    wdate={'2022.02.10'}
                  />
                </Board>
              </div>
              <div>
                <div className={'flex items-center justify-between'}>
                  <h3 className={'my-0'}>사진 갤러리</h3>
                  <Link to={PATH_PUBLIC.NOTIFY.GALLERY.LINKS}>
                    <button className={'btn-xs btn'}>more</button>
                  </Link>
                </div>

                <div className={'divider my-1'}></div>
                <PhotoBoard>
                  <PhotoBoardRow imgLink={MOCK_GALLERY_IMG_1} />
                  <PhotoBoardRow imgLink={MOCK_GALLERY_IMG_2} />
                  <PhotoBoardRow imgLink={MOCK_GALLERY_IMG_3} />
                </PhotoBoard>
              </div>
            </div>
          }
        />
      </LandingContentsSection>
    </>
  );
}
