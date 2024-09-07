import { PageTitle } from '../../components/title/index.js';
import useLogin from '../../features/authentication/hooks/use-login.hook.jsx';
import { useForm } from 'react-hook-form';
import { FormWrapper, Input } from '../../components/form/index.js';
import { LinkBtn, SubmitBtn } from '../../components/button/index.js';
import { PATH_AUTH } from '../../constant/link/AuthLinks.js';
import { DevTool } from '@hookform/devtools';

// 로그인 페이지
export default function LoginPage() {
  const { mutate: login } = useLogin();

  const { formState, control, handleSubmit, reset } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });
  const { isSubmitting } = formState;

  async function onSubmit(data) {
    await login(data);
  }
  return (
    <>
      <PageTitle>Login</PageTitle>
      <FormWrapper submitFn={handleSubmit(onSubmit)}>
        <Input
          labelText={'아이디(이메일)'}
          type={'text'}
          name={'id'}
          control={control}
          rules={{ required: '아이디를 입력해주세요' }}
        />

        <Input
          labelText={'비밀번호'}
          type={'password'}
          name={'password'}
          control={control}
          rules={{ required: '비밀번호를 입력해주세요' }}
        />
        <div className="flex items-center justify-between">
          <SubmitBtn isDisabled={isSubmitting} text={'Login'} />

          <LinkBtn link={PATH_AUTH.REGISTER} text={'회원가입'} />
        </div>
      </FormWrapper>
      <DevTool control={control} />
    </>
  );
}
