// Form의 input요소의 유효성 검사시, 메시지를 표시해주는 컴포넌트
export default function AlertInputStateMsg({ value, name }) {
  return (
    <span
      className={`label-text-alt text-sm ${
        value ? 'text-red-500' : 'text-green-500'
      }`}
    >
      {name}
    </span>
  );
}
