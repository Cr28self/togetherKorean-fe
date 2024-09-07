import {
  LandingContentsLayout,
  LandingContentsSection,
  InfoBanner,
  LandingTableCell,
  LineBreakResSentence,
  NotifyTable,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { IoLibraryOutline } from 'react-icons/io5';
import { NOTIFY_TABLE_TYPE } from '../../../features/landing/constants/NotifyTableConst.js';
// 자료실 페이지
export default function ContentsPage() {
  return (
    <>
      <PublicPageTitle
        icon={<IoLibraryOutline className={'h-10 w-10'} />}
        title={'자료실'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={[
            '2gether Korean에서 학생들에게 제공하는',
            ' 학습 자료 및 사무 양식입니다.',
          ]}
        />
      </InfoBanner>

      <LandingContentsSection>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <NotifyTable
                tableTitle={'자료실'}
                headData={NOTIFY_TABLE_TYPE.CONTENTS_HEAD}
              >
                {NOTIFY_TABLE_TYPE.CONTENTS_BODY_MOCK.map((item, index) => {
                  return (
                    <tr key={index}>
                      <LandingTableCell data={item.type} />
                      <LandingTableCell data={item.title} />
                      <LandingTableCell data={item.role} />
                      <LandingTableCell data={item.name} />
                      <LandingTableCell data={item.file} />
                      <LandingTableCell data={item.wdate} />
                    </tr>
                  );
                })}
              </NotifyTable>
            </>
          }
        />
      </LandingContentsSection>
    </>
  );
}
