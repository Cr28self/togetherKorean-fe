import {
  LandingContentsLayout,
  LandingContentsSection,
  InfoBanner,
  LineBreakResSentence,
  PublicPageTitle,
} from '../../../features/landing/components/index.js';

import { RiQuestionnaireLine } from 'react-icons/ri';

import { Accordion } from '../../../features/landing/components/accordion/index.js';
import {
  FormWrapper,
  Input,
  TextAreaInput,
} from '../../../components/form/index.js';
import { useForm } from 'react-hook-form';
// 학생활동 -- Q&A페이지
export default function LearnerQnAPage() {
  //   Q&A 페이지 임시 데이터들
  const MOCK_FREQ_DATA = [
    { title: 'question1', contents: 'anaswer1' },
    { title: 'question2', contents: 'anaswer2' },
    { title: 'question3', contents: 'anaswer3' },
    { title: 'question4', contents: 'anaswer4' },
  ];

  const { formState, control, handleSubmit, reset, trigger, watch } = useForm({
    defaultValues: {
      title: '',
      qtype: '',
      contents: '',
    },
  });

  async function onSubmit(formData) {
    //submit 함수

    console.log('not found');
  }

  return (
    <>
      <PublicPageTitle
        icon={<RiQuestionnaireLine className={'h-10 w-10'} />}
        title={'Q & A'}
      />

      <InfoBanner>
        <LineBreakResSentence
          paragraph={[
            '2gether Korean의 수업이나',
            ' 입학 지도에 대해 궁금한 것을 물어 보세요.',
          ]}
        />
      </InfoBanner>

      <LandingContentsSection title={'질문 하기'}>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <FormWrapper submitFn={handleSubmit(onSubmit)}>
              <div className={'gap-3 sm:flex'}>
                <Input
                  labelText={'제목'}
                  control={control}
                  type={'text'}
                  name={'title'}
                />

                <Input
                  labelText={'유형'}
                  control={control}
                  type={'text'}
                  name={'qtype'}
                />
              </div>

              <TextAreaInput
                labelText={'질문 내용'}
                control={control}
                name={'contents'}
              />
            </FormWrapper>
          }
        />
      </LandingContentsSection>

      <div className={'divider my-10'}></div>
      <LandingContentsSection title={'자주 묻는 질문'}>
        <LandingContentsLayout
          // icon={<BsPersonCircle className={'h-20 w-20'} />}
          sentence={
            <div className={'grid grid-cols-1 gap-4 lg:grid-cols-3'}>
              <div>
                <h3 className={'mt-0'}>수업</h3>

                {/*  아코디언*/}
                <Accordion data={MOCK_FREQ_DATA} />
              </div>

              <div>
                <h3 className={'mt-0'}>대학 입학</h3>

                <Accordion data={MOCK_FREQ_DATA} />
              </div>

              <div>
                <h3 className={'mt-0'}>대학원 입학</h3>

                <Accordion data={MOCK_FREQ_DATA} />
              </div>
            </div>
          }
        />
      </LandingContentsSection>
    </>
  );
}
