import {
  LandingContentsLayout,
  LandingContentsSection,
  InfoBanner,
  LineBreakResSentence,
  PhotoCard,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { GrGallery } from 'react-icons/gr';
import {
  MOCK_GALLERY_IMG_1,
  MOCK_GALLERY_IMG_2,
  MOCK_GALLERY_IMG_3,
} from '../../../features/landing/mock/index.js';

// 사진 갤러리 페이지
export default function PhotoGalleryPage() {
  return (
    <>
      <PublicPageTitle
        icon={<GrGallery className={'h-10 w-10'} />}
        title={'사진 갤러리'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={['2gether Korean의', '  학생, 교직원 사진입니다.']}
        />
      </InfoBanner>

      <LandingContentsSection>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <div
              className={
                'grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
              }
            >
              <PhotoCard
                imgLink={MOCK_GALLERY_IMG_1}
                title={'test1'}
                description={'Neque porro quisquam est qui dolorem ipsum quia '}
                tagList={['test', 'test1']}
              />
              <PhotoCard
                imgLink={MOCK_GALLERY_IMG_2}
                title={'test1'}
                description={'Neque porro quisquam est '}
                tagList={['test', 'test1']}
              />
              <PhotoCard
                imgLink={MOCK_GALLERY_IMG_3}
                title={'test1'}
                description={'Neque porro quisquam'}
                tagList={['test', 'test1']}
              />
            </div>
          }
        />
      </LandingContentsSection>
    </>
  );
}
