import {
  LandingContentsLayout,
  LandingContentsSection,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';
import { GiTeacher } from 'react-icons/gi';
import { FaPeopleRobbery } from 'react-icons/fa6';
import { FcGraduationCap } from 'react-icons/fc';
import { ImEnter } from 'react-icons/im';
import { IoLanguage } from 'react-icons/io5';

import { FcInfo } from 'react-icons/fc';
import { BsPersonCircle } from 'react-icons/bs';

const ContentsText = ({ text }) => {
  return (
    <p className={'break-keep text-center text-base md:text-start md:text-xl'}>
      {text}
    </p>
  );
};

// Together Korean 소개 페이지
export default function GuideHomePage() {
  return (
    <>
      <PublicPageTitle
        icon={<FcInfo className={'h-10 w-10'} />}
        title={'Together Korean 소개'}
      />
      <div>
        <LandingContentsSection title={'Together Korean에서 하는 일 '}>
          <LandingContentsLayout
            icon={<IoLanguage className={'h-24 w-24'} />}
            sentence={
              <ContentsText
                text={
                  <LineBreakResSentence
                    paragraph={[
                      '한국어를 외국어, 혹은 제 2언어로',
                      ' 공부하는 학생들의 한국어 공부 지도',
                    ]}
                  />
                }
              />
            }
          />
          <LandingContentsLayout
            icon={<FcGraduationCap className={'h-24 w-24'} />}
            sentence={
              <ContentsText
                text={
                  <LineBreakResSentence
                    paragraph={[
                      '한국 국적이 아닌 외국인 학생들의',
                      ' 한국 대학, 대학원 선택과 진학 지도',
                    ]}
                  />
                }
              />
            }
          />
        </LandingContentsSection>

        <div className={'divider my-10'}></div>
        <LandingContentsSection title={'Together Korean의 지향점'}>
          <LandingContentsLayout
            icon={<GiTeacher className={'h-24 w-24'} />}
            sentence={
              <ContentsText
                text={'외국인들에게 질 좋은 한국어 학습의 기회 제공'}
              />
            }
          />

          <LandingContentsLayout
            icon={<ImEnter className={'h-24 w-24'} />}
            sentence={
              <ContentsText
                text={
                  <LineBreakResSentence
                    paragraph={[
                      '외국인들의 한국 대학, 대학원 선택과',
                      ' 입학을 용이하게 함',
                    ]}
                  />
                }
              />
            }
          />
          <LandingContentsLayout
            icon={<FaPeopleRobbery className={'h-24 w-24'} />}
            sentence={
              <ContentsText
                text={
                  <LineBreakResSentence
                    paragraph={[
                      '외국인들이 한국 대학, 대학원 생활을 ',
                      '잘 할 수 있게 함',
                    ]}
                  />
                }
              />
            }
          />
        </LandingContentsSection>

        <div className={'divider my-10'}></div>
        <LandingContentsSection title={'설립자 소개'}>
          <LandingContentsLayout
            icon={<BsPersonCircle className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>김제열</h2>
                <div>전 연세대학교 한국어학당 교수</div>
                <div>전 TOPIK 출제위원 </div>
                <div>저서 : 연세한국어2, 6 (연세대학교 출판문화원)</div>
                <div>재외동포를 위한 한국어 4, 5, 6, 7 (교육과정평가원)</div>
                <div>한국어문법교육론 (한국문화사)</div>
              </>
            }
          />

          <LandingContentsLayout
            icon={<BsPersonCircle className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>강은정</h2>
                <div>고려대학교 일어일문학박사 수료 </div>
                <div>현 연세대학교 한국어학당 강사</div>
              </>
            }
          />
        </LandingContentsSection>
      </div>
    </>
  );
}
