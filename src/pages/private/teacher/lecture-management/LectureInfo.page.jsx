import useFetchALLlecture from '../../../../features/lectures-management/hooks/useFetchALLlecture.jsx';
import useDeleteOneLecture from '../../../../features/lectures-management/hooks/useDeleteOneLecture.jsx';
import useGetCurTeacherCode from '../../../../features/lectures-management/hooks/useGetCurTeacherCode.jsx';
import {
  Table,
  TableActionBtn,
  TableBodyCell,
  TableBodyRow,
  TableContentsWrapper,
} from '../../../../components/table/index.js';
import { PageTitle } from '../../../../components/title/index.js';
import { CreateBtn } from '../../../../components/button/index.js';
import { PATH_PRIVATE } from '../../../../constant/link/PrivateLinks.js';
import { TABLE_TYPE } from '../../../../constant/table/UserTypeInfo.js';

//Teacher로 로그인했을 경우, Teacher가 가지고 있는 Lecture들 보여주는 table 페이지

export default function LectureInfoPage() {
  const { data, isLoading } = useFetchALLlecture();

  const { deleteOneLecture } = useDeleteOneLecture();
  const teacherCode = useGetCurTeacherCode();

  if (isLoading) return <div>Loading</div>;

  return (
    <TableContentsWrapper>
      <PageTitle>강의 관리</PageTitle>
      {/*CreateButton*/}
      <CreateBtn
        title={'강의 생성'}
        createLink={PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.CREATE.LINKS_FUNC(
          teacherCode,
        )}
      />

      <Table headData={TABLE_TYPE.HEAD.TEACHER.LectureInfo}>
        {data?.map((userData) => {
          return (
            <TableBodyRow key={userData.lectureCode}>
              <TableBodyCell data={userData.lectureCode} />
              <TableBodyCell data={userData.openDate} />
              <TableBodyCell data={userData.lectureName} />
              <TableBodyCell data={userData.lectureContent} />
              <TableBodyCell data={userData.lectureLink} />
              <TableBodyCell data={userData.wdate} />

              <TableBodyCell
                data={
                  <>
                    <TableActionBtn
                      type={'update'}
                      text={'수정'}
                      updateLink={PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.INPUT_FORM.LINKS_FUNC(
                        userData.lectureCode,
                      )}
                    />
                    <TableActionBtn
                      type={'delete'}
                      text={'삭제'}
                      deleteFn={() => deleteOneLecture(userData.lectureCode)}
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
