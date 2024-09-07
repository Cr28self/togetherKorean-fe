import { useParams } from 'react-router-dom';
import useCreateLecture from '../../../../features/lectures-management/hooks/useCreateLecture.jsx';
import { useForm } from 'react-hook-form';
import { PageTitle } from '../../../../components/title/index.js';
import { FormWrapper, Input } from '../../../../components/form/index.js';
import { SubmitBtn } from '../../../../components/button/index.js';
import { DevTool } from '@hookform/devtools';

//Teacher로 로그인했을때, 접근 가능한 Lecture 생성 페이지
export default function LectureCreatePage() {
  const { teacherCode } = useParams();

  const { mutate: createLecture } = useCreateLecture();

  const { formState, control, handleSubmit, reset, trigger } = useForm({
    defaultValues: {
      teacherCode: teacherCode,
      openDate: '',
      lectureName: '',
      lectureContent: '',
      lectureLink: '',
      wdate: '',
    },
  });
  const { isSubmitting, isDirty } = formState;

  async function onSubmit(formData) {
    //submit 함수
    await createLecture(formData);
  }

  return (
    <>
      <PageTitle>강의 생성</PageTitle>

      <FormWrapper submitFn={handleSubmit(onSubmit)}>
        <Input
          labelText={'강사 코드'}
          type={'text'}
          name={'teacherCode'}
          control={control}
          disabled={true}
        />

        <Input
          labelText={'Open Date'}
          type={'datetime-local'}
          name={'openDate'}
          control={control}
          rules={{ required: '입력해주세요' }}
        />

        <Input
          labelText={'강의 이름'}
          type={'text'}
          name={'lectureName'}
          control={control}
          rules={{ required: '입력해주세요' }}
        />
        <Input
          labelText={'강의 콘텐츠'}
          type={'text'}
          name={'lectureContent'}
          control={control}
          rules={{ required: '입력해주세요' }}
        />
        <Input
          labelText={'강의 링크'}
          type={'text'}
          name={'lectureLink'}
          control={control}
          rules={{ required: '입력해주세요' }}
        />

        <SubmitBtn isDisabled={!isDirty || isSubmitting} text={'강의 생성'} />
      </FormWrapper>
      <DevTool control={control} />
    </>
  );
}
