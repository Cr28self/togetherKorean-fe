import {
  InfoBanner,
  LandingContentsLayout,
  LandingContentsSection,
  LandingTableCell,
  LineBreakResSentence,
  NotifyTable,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { AiFillNotification } from 'react-icons/ai';

import { NOTIFY_TABLE_TYPE } from '../../../features/landing/constants/NotifyTableConst.js';

// 공지 사항 페이지
export default function NotifyPage() {
  return (
    <>
      <PublicPageTitle
        icon={<AiFillNotification className={'h-10 w-10'} />}
        title={'공지'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={[
            'Together Korean에서 학생들 및',
            ' 회원 여러분께 알리는 글입니다.',
          ]}
        />
      </InfoBanner>

      <LandingContentsSection>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <>
              <NotifyTable
                tableTitle={'공지사항'}
                headData={NOTIFY_TABLE_TYPE.NOTIFY_HEAD}
              >
                {NOTIFY_TABLE_TYPE.NOTIFY_BODY_MOCK.map((item, index) => {
                  return (
                    <tr key={index}>
                      <LandingTableCell data={item.type} />
                      <LandingTableCell data={item.title} />
                      <LandingTableCell data={item.role} />
                      <LandingTableCell data={item.name} />
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
