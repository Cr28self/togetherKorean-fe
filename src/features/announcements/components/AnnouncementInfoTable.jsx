import { PageTitle } from '../../../components/title/index.js';
import {
  Table,
  TableActionBtn,
  TableBodyCell,
  TableBodyRow,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { TABLE_TYPE } from '../../../constant/table/UserTypeInfo.js';

//Admin의 강의 계약서 테이블 페이지
export default function AnnouncementInfoTable() {
  return (
    <TableContentsWrapper>
      <PageTitle>계약서 정보</PageTitle>
      <Table headData={TABLE_TYPE.HEAD.ADMIN.Announcement}>
        <TableBodyRow key={'1'}>
          <TableBodyCell data={1} />
          <TableBodyCell data={'오상현'} />
          <TableBodyCell data={'title'} />
          <TableBodyCell data={'계약서 file'} />
          <TableBodyCell data={'2023-01-01'} />
          <TableBodyCell data={'2023-01-01'} />
          <TableBodyCell data={'1 hour'} />

          <TableBodyCell
            data={
              <>
                <TableActionBtn
                  type={'update'}
                  text={'수정'}
                  // updateLink={`/admin/teacher/${userData.teacher_code}`}
                />
                <TableActionBtn
                  type={'delete'}
                  text={'삭제'}
                  // deleteFn={() => deleteOneUser(userData.teacher_code)}
                />
              </>
            }
          />
        </TableBodyRow>
      </Table>
    </TableContentsWrapper>
  );
}
