// 화면 크기가 달라질때마다 문장 줄바꿈 관리하는 컴포넌트
// ex)
// <LineBreakResSentence
//     paragraph={['ZOOM meeting을 이용한', ' 실시간 Live 수업']}
// />
// --->> 화면 크기가 sm이하일경우 'ZOOM meeting을 이용한' / '실시간 Live 수업' 두줄로 나뉨

export default function LineBreakResSentence({ paragraph }) {
  return (
    <>
      {paragraph.map((sentence, index) => (
        <span key={index} className={'block sm:inline'}>
          {sentence}
        </span>
      ))}
    </>
  );
}
