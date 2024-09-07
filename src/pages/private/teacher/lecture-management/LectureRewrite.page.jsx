import { useParams } from 'react-router-dom';
import useFetchOneLecture from '../../../../features/lectures-management/hooks/useFetchOneLecture.jsx';
import useUpdateOneLecture from '../../../../features/lectures-management/hooks/useUpdateOneLecture.jsx';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { PageTitle } from '../../../../components/title/index.js';
import { FormWrapper, Input } from '../../../../components/form/index.js';
import { SubmitBtn } from '../../../../components/button/index.js';
import { DevTool } from '@hookform/devtools';

//Teacher로 로그인했을때, Lecture 수정 가능한 Input form 페이지
export default function LectureRewritePage() {
  const { lectureCode } = useParams();

  const { oneLecture, isLoading } = useFetchOneLecture(lectureCode);
  const { mutate: update } = useUpdateOneLecture();

  const { formState, control, reset, handleSubmit } = useForm({
    defaultValues: {
      lectureCode: '',
      openDate: '',
      lectureName: '',
      lectureContent: '',
      lectureLink: '',
      wdate: '',
    },
  });

  const { isSubmitting, isDirty } = formState;

  useEffect(() => {
    if (Object.keys(oneLecture).length) {
      reset({
        lectureCode: oneLecture.lectureCode,
        openDate: oneLecture?.openDate,
        lectureName: oneLecture.lectureName,
        lectureContent: oneLecture.lectureContent,
        lectureLink: oneLecture.lectureLink,
        wdate: oneLecture.wdate,
      });
    }
  }, [oneLecture, reset]);

  async function onSubmit(inputForm) {
    // await update({ inputForm });

    console.log(inputForm);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <PageTitle>강의 수정</PageTitle>
      <FormWrapper submitFn={handleSubmit(onSubmit)}>
        <Input
          labelText={'강의 코드'}
          type={'text'}
          name={'lectureCode'}
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

        <SubmitBtn isDisabled={!isDirty || isSubmitting} text={'강의 수정'} />
      </FormWrapper>
      <DevTool control={control} />
    </>
  );
}
