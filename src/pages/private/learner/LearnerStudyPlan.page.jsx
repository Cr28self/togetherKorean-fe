import {
  Table,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { PageTitle } from '../../../components/title/index.js';
import { TABLE_TYPE } from '../../../constant/table/UserTypeInfo.js';

export default function LearnerStudyPlanPage() {
  return (
    <TableContentsWrapper>
      <PageTitle>학습 계획표</PageTitle>
      <Table headData={TABLE_TYPE.HEAD.LEARNER.LearnerSplan}></Table>
    </TableContentsWrapper>
  );
}
