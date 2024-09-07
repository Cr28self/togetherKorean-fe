import useFetchAllUsers from '../../../features/users-management/hooks/use-fetch-all-users.hook.jsx';
import useDeleteOneUser from '../../../features/users-management/hooks/use-delete-one-user.hook.jsx';
import {
  Table,
  TableActionBtn,
  TableBodyCell,
  TableBodyRow,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { PageTitle } from '../../../components/title/index.js';
import { CreateBtn } from '../../../components/button/index.js';
import { PATH_PRIVATE } from '../../../constant/link/PrivateLinks.js';
import { TABLE_TYPE } from '../../../constant/table/UserTypeInfo.js';
//Admin에서 강의자 정보 info 페이지
export default function TeacherInfoPage() {
  const { data, isLoading } = useFetchAllUsers('teacher');
  const { deleteOneUser } = useDeleteOneUser('teacher');

  if (isLoading) return <div>Loading</div>;

  // 테이블
  return (
    <TableContentsWrapper>
      <PageTitle>강의자 개인정보</PageTitle>
      {/*CreateButton*/}
      <CreateBtn
        title={'강의자 생성'}
        createLink={PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.CREATE.LINKS}
      />
      <Table headData={TABLE_TYPE.HEAD.ADMIN.TeacherInfo}>
        {data?.map((userData) => {
          return (
            <TableBodyRow key={userData.teacher_code}>
              <TableBodyCell data={userData.filename} />
              <TableBodyCell data={userData.teacher_code} />
              <TableBodyCell data={userData.id} />
              <TableBodyCell data={userData.password} />
              <TableBodyCell data={userData.name} />
              <TableBodyCell data={userData.gender === 0 ? '남' : '여'} />
              <TableBodyCell data={userData.ssnum} />
              <TableBodyCell data={userData.tel} />
              <TableBodyCell data={userData.email} />
              <TableBodyCell data={userData.wdate} />
              <TableBodyCell data={userData.etc} />

              <TableBodyCell
                data={
                  <>
                    <TableActionBtn
                      type={'update'}
                      text={'수정'}
                      updateLink={PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.INPUT_FORM.LINKS_FUNC(
                        userData.teacher_code,
                      )}
                    />
                    <TableActionBtn
                      type={'delete'}
                      text={'삭제'}
                      deleteFn={() => deleteOneUser(userData.teacher_code)}
                    />
                  </>
                }
              />
            </TableBodyRow>
          );
        })}
      </Table>
    </TableContentsWrapper>
  );
}
