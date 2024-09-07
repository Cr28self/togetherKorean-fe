import useJoin from '../../../features/authentication/hooks/use-join.hook.jsx';
import { useForm } from 'react-hook-form';
import { apiClient } from '../../../libs/axios.js';
import { PageTitle } from '../../../components/title/index.js';
import {
  FormWrapper,
  GenderSelection,
  Input,
  InputAsyncCheckID,
} from '../../../components/form/index.js';
import debounce from 'lodash/debounce.js';
import { SubmitBtn } from '../../../components/button/index.js';
import { DevTool } from '@hookform/devtools';

//Admin에서 Teacher 생성하는 페이지
export default function TeacherCreatePage() {
  const { mutate: join } = useJoin('teacher');
  //회원가입 mutation

  const { formState, control, handleSubmit, reset, trigger, watch } = useForm({
    defaultValues: {
      id: '',
      password: '',
      confirmPassword: '',
      name: '',
      gender: 0,
      birthday: '',
      ssnum: '',
      tel: '',
      email: '',
      wdate: '',
      etc: '',
    },
  });
  const { isSubmitting } = formState;

  const handleComparePassword = (originPW, confirmPW) => {
    if (originPW !== confirmPW) {
      return '비밀번호가 일치하지 않습니다.';
    }
  };

  async function handleCheckId(id) {
    const { data: result } = await apiClient.get(`/member/checkid?id=${id}`);

    return !result || '해당 아이디는 이미 사용중입니다.';
  }

  async function onSubmit(formData) {
    //submit 함수
    await join(formData);
  }

  return (
    <>
      <PageTitle>강의자 생성</PageTitle>

      <FormWrapper submitFn={handleSubmit(onSubmit)}>
        <InputAsyncCheckID
          control={control}
          name="id"
          rules={{
            required: '아이디를 입력해주세요',
            validate: debounce(handleCheckId, 500),
          }}
          trigger={trigger}
        />

        <Input
          labelText={'비밀번호'}
          type={'password'}
          name={'password'}
          control={control}
          rules={{ required: '비밀번호를 입력해주세요' }}
        />

        <Input
          labelText={'비밀번호 확인'}
          type={'password'}
          name={'confirmPassword'}
          control={control}
          disabled={watch('password') === ''}
          rules={{
            required: '비밀번호를 입력해주세요',
            validate: (fieldValue) =>
              handleComparePassword(watch('password'), fieldValue),
          }}
        />

        <Input
          labelText={'이름'}
          type={'text'}
          name={'name'}
          control={control}
          rules={{ required: '이름를 입력해주세요' }}
        />

        {/*  성별 */}
        <GenderSelection labelText={'성별'} name={'gender'} control={control} />
        {/*  주민번호 ssnum  - teacher */}

        <Input
          labelText={'주민번호'}
          type={'text'}
          name={'ssnum'}
          control={control}
          rules={{ required: '주민번호를 입력해주세요' }}
        />

        {/*  전화번호 */}
        <Input
          labelText={'전화번호'}
          type={'tel'}
          name={'tel'}
          control={control}
          rules={{ required: '전화번호를 입력해주세요' }}
        />
        {/*  이메일 */}
        <Input
          labelText={'이메일'}
          type={'email'}
          name={'email'}
          control={control}
          rules={{
            required: '이메일을 입력해주세요',
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, //정규식 패턴
              message: '유효한 이메일을 입력해주세요', //패턴과 일치하지 않는 문자 입력시
            },
          }}
        />
        {/*기타*/}

        <Input
          labelText={'기타'}
          type={'text'}
          name={'etc'}
          control={control}
        />
        <div className="flex items-center justify-between">
          <SubmitBtn isDisabled={isSubmitting} text={'Sign In'} />
        </div>
      </FormWrapper>
      <DevTool control={control} />
    </>
  );
}
