import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useFetchOneUser from '../../../features/users-management/hooks/use-fetch-one-user.hook.jsx';
import useUpdateOneUser from '../../../features/users-management/hooks/use-update-one-user.hook.jsx';
import { useEffect } from 'react';
import { PageTitle } from '../../../components/title/index.js';
import {
  FormWrapper,
  GenderSelection,
  Input,
} from '../../../components/form/index.js';
import { SubmitBtn } from '../../../components/button/index.js';
import { DevTool } from '@hookform/devtools';

//Admin의 강의자의 teacherCode에 해당하는 강의자의 input form
export default function TeacherRewritePage() {
  const { teacherCode } = useParams();

  const { formState, control, reset, handleSubmit } = useForm({
    defaultValues: {
      teacherCode: teacherCode,
      id: '',
      password: '',
      name: '',
      gender: '',
      ssnum: '',
      tel: '',
      email: '',
      wdate: '',
      etc: '',
    },
  });

  const { oneUser, isLoading } = useFetchOneUser('teacher', teacherCode);

  const { mutate: update } = useUpdateOneUser();

  const { isSubmitting, isDirty } = formState;

  useEffect(() => {
    if (Object.keys(oneUser).length) {
      reset({
        id: oneUser.id,
        password: oneUser.password,
        name: oneUser.name,
        gender: oneUser.gender,
        ssnum: oneUser.ssnum,
        tel: oneUser.tel,
        email: oneUser.email,
        wdate: oneUser.wdate,
        etc: oneUser.etc,
      });
    }
  }, [oneUser, reset]);

  async function onSubmit(inputForm) {
    await update({ userType: 'teacher', inputForm });
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <PageTitle>강의자 수정</PageTitle>
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
          labelText={'주민번호'}
          type={'text'}
          name={'ssnum'}
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
