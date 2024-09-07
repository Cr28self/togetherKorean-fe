//Input Form에서 Input에 값 입력후 마지막으로 제출하는 UI버튼 컴포넌트

export default function SubmitBtn({ isDisabled, text }) {
  return (
    <button className="btn-ghost btn" type={'submit'} disabled={isDisabled}>
      {text}
    </button>
  );
}
