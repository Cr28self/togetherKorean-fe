import {
  Table,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { TABLE_TYPE } from '../../../constant/table/UserTypeInfo.js';

export default function LearnerAttendancePage() {
  return (
    <TableContentsWrapper>
      <Table headData={TABLE_TYPE.HEAD.LEARNER.LearnerCourse}></Table>
    </TableContentsWrapper>
  );
}
