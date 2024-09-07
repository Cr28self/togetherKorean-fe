import {
  LandingContentsLayout,
  LandingContentsSection,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaTrainSubway } from 'react-icons/fa6';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { RiBusFill } from 'react-icons/ri';
import KakaoMap from '../../../features/landing/components/kakao-map/KakaoMap.jsx';

// 찾아오시는 길 페이지
export default function GuideLocationPage() {
  return (
    <>
      <PublicPageTitle
        icon={<FaMapMarkerAlt className={'h-10 w-10'} />}
        title={'찾아오시는 길'}
      />

      <div>
        {/*  컨텐츠 Section Wrapper*/}
        <LandingContentsSection title={'위치'}>
          {/*  컨텐츠 내용*/}
          <LandingContentsLayout
            icon={<HiOutlineBuildingOffice2 className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>사무실 주소</h2>
                <div>경기도 광명시 시청로 101번길 10-4번지 (철산동) </div>

                {/*  카카오맵 불러오는 컴포넌트*/}
                <KakaoMap location={{ lat: 37.485475, lng: 126.865138 }} />
              </>
            }
          />
        </LandingContentsSection>

        <div className={'divider my-10'}></div>

        <LandingContentsSection title={'대중 교통'}>
          <LandingContentsLayout
            icon={
              <span className={'flex items-center gap-4'}>
                <FaTrainSubway className={'h-20 w-20'} />
                <RiBusFill className={'h-24 w-24'} />
              </span>
            }
            sentence={
              <p
                className={
                  'break-keep text-center text-base md:text-start md:text-xl'
                }
              >
                <LineBreakResSentence
                  paragraph={[
                    '7호선 철산역에서 버스 11-1, 11-2, 6638, 17번을 타고 ',
                    '현충공원 앞에서 하차',
                  ]}
                />
              </p>
            }
          />
        </LandingContentsSection>

        {/*  Section 구분선 */}
        <div className={'divider my-10'}></div>

        <LandingContentsSection title={'Contact'}>
          <LandingContentsLayout
            icon={<BsFillTelephoneFill className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>전화번호</h2>
                <div>010 – 6473 -4237 </div>
              </>
            }
          />

          <LandingContentsLayout
            icon={<AiOutlineMail className={'h-20 w-20'} />}
            sentence={
              <>
                <h2 className={'mt-0'}>이메일</h2>
                <div>2getherkorean@gmail.com</div>
              </>
            }
          />
        </LandingContentsSection>
      </div>
    </>
  );
}
