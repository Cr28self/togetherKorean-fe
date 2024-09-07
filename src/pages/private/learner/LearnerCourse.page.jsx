import {
  Table,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { PageTitle } from '../../../components/title/index.js';
import { TABLE_TYPE } from '../../../constant/table/UserTypeInfo.js';

export default function LearnerCoursePage() {
  return (
    <TableContentsWrapper>
      <PageTitle>강의 목록 조회</PageTitle>
      <Table headData={TABLE_TYPE.HEAD.LEARNER.LearnerCourse}></Table>
    </TableContentsWrapper>
  );
}
