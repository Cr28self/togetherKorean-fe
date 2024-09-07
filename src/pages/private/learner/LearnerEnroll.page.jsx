import {
  Table,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { PageTitle } from '../../../components/title/index.js';
import { TABLE_TYPE } from '../../../constant/table/UserTypeInfo.js';

export default function LearnerEnrollPage() {
  return (
    <>
      <TableContentsWrapper>
        <PageTitle>수강 신청</PageTitle>
        <Table headData={TABLE_TYPE.HEAD.LEARNER.LearnerCourse}></Table>
      </TableContentsWrapper>
      <div className={'divider'}></div>

      <TableContentsWrapper>
        <PageTitle>신청한 목록</PageTitle>
        <Table headData={TABLE_TYPE.HEAD.LEARNER.LearnerCourse}></Table>
      </TableContentsWrapper>
    </>
  );
}
