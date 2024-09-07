import useFetchAllUsers from '../../../features/users-management/hooks/use-fetch-all-users.hook.jsx';
import useDeleteOneUser from '../../../features/users-management/hooks/use-delete-one-user.hook.jsx';
import { LoadingIndicator } from '../../../components/indicator/index.js';
import {
  Table,
  TableActionBtn,
  TableBodyCell,
  TableBodyRow,
  TableContentsWrapper,
} from '../../../components/table/index.js';
import { PageTitle } from '../../../components/title/index.js';
import { USER_MANAGEMENT_TABLE } from '../../../features/users-management/constants/index.js';
import { PATH_PRIVATE } from '../../../constant/link/PrivateLinks.js';

export default function LearnerInfoPage() {
  const { data, isLoading } = useFetchAllUsers('learner');
  const { deleteOneUser } = useDeleteOneUser('learner');

  if (isLoading) return <LoadingIndicator />;

  // Render the learner information table
  return (
    <TableContentsWrapper>
      <PageTitle>학습자 개인정보</PageTitle>

      {/* Render the table contents */}
      <Table headData={USER_MANAGEMENT_TABLE.HEAD.LEARNER_INFO}>
        {/* Render the table body */}
        {data?.map((userData, idx) => (
          <TableBodyRow idx={idx} key={userData.learnerCode}>
            {/*  헬퍼함수 사용??? */}

            {USER_MANAGEMENT_TABLE.BODY.LEARNER_INFO.map((cellKey) => (
              <TableBodyCell key={cellKey} data={userData.member[cellKey]} />
            ))}

            <TableBodyCell
              data={
                <>
                  {/* Render the update button */}
                  <TableActionBtn
                    type={'update'}
                    text={'수정'}
                    updateLink={PATH_PRIVATE.ADMIN.LEARNER_MANAGEMENT.INPUT_FORM.LINKS_FUNC(
                      userData.learnerCode,
                    )}
                  />
                  {/* Render the delete button */}
                  <TableActionBtn
                    type={'delete'}
                    text={'삭제'}
                    deleteFn={() => deleteOneUser(userData.member.id)}
                  />
                </>
              }
            />
          </TableBodyRow>
        ))}
      </Table>
    </TableContentsWrapper>
  );
}
