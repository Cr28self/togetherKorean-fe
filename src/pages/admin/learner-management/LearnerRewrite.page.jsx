import { useParams } from 'react-router-dom';
import useFetchOneUser from '../../../features/users-management/hooks/use-fetch-one-user.hook.jsx';
import useUpdateOneUser from '../../../features/users-management/hooks/use-update-one-user.hook.jsx';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { PageTitle } from '../../../components/title/index.js';
import {
  FormWrapper,
  GenderSelection,
  Input,
} from '../../../components/form/index.js';
import { SubmitBtn } from '../../../components/button/index.js';
import { DevTool } from '@hookform/devtools';
//Admin의 학습자 정보의 learnerCode에 해당하는 학습자의 input Page
export default function LearnerRewritePage() {
  const { learnerCode } = useParams();
  const { oneUser, isLoading } = useFetchOneUser('learner', learnerCode);

  const { mutate: update } = useUpdateOneUser();

  const { formState, control, reset, handleSubmit } = useForm({
    defaultValues: {
      id: '',
      password: '',
      name: '',
      gender: '',
      birthday: '',
      tel: '',
      email: '',
      wdate: '',
      etc: '',
    },
  });

  const { isSubmitting, isDirty } = formState;

  useEffect(() => {
    // 헬퍼함수로 리팩토링 가능?

    console.log(oneUser);
    if (Object.keys(oneUser).length) {
      reset({
        id: oneUser.learnerId,
        password: oneUser.pwd,
        name: oneUser.lname,
        gender: oneUser.gender,
        birthday: oneUser.birthday,
        tel: oneUser.tel, //o
        email: oneUser.email,
        wdate: oneUser.wdate,
        etc: oneUser.etc,
      });
    }
  }, [oneUser, reset]);

  async function onSubmit(inputForm) {
    await update({ userType: 'learner', inputForm });
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <PageTitle>학습자 수정</PageTitle>
      <FormWrapper submitFn={handleSubmit(onSubmit)}>
        <Input
          labelText={'아이디'}
          type={'text'}
          name={'id'}
          control={control}
          disabled={true}
        />
        <Input
          labelText={'비밀번호'}
          type={'password'}
          name={'password'}
          control={control}
          rules={{ required: '비밀번호를 입력해주세요' }}
        />

        <Input
          labelText={'이름'}
          type={'text'}
          name={'name'}
          control={control}
          rules={{ required: '이름을 입력해주세요' }}
        />

        <Input
          labelText={'생일'}
          type={'date'}
          name={'birthday'}
          control={control}
          disabled={true}
        />

        {/*  성별 */}
        <GenderSelection
          labelText={'성별'}
          name={'gender'}
          control={control}
          disabled={true}
        />

        <Input
          labelText={'전화번호'}
          type={'tel'}
          name={'tel'}
          control={control}
          rules={{ required: '전화번호를 입력해주세요' }}
        />

        <Input
          labelText={'이메일'}
          type={'email'}
          name={'email'}
          control={control}
          disabled={true}
        />

        <Input
          labelText={'기타'}
          type={'text'}
          name={'etc'}
          control={control}
        />

        <SubmitBtn isDisabled={!isDirty || isSubmitting} text={'수정'} />
      </FormWrapper>
      <DevTool control={control} />
    </>
  );
}
