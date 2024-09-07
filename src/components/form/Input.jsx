import { useController } from 'react-hook-form';
import AlertInputStateMsg from './AlertInputStateMsg.jsx';

// 기본 Input 요소
export default function Input({
  labelText,
  type,
  name,
  rules,
  control,
  disabled,
  inputCondition,
  placeholder,
}) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, rules, control });
  return (
    <div className={'mb-4'}>
      {/*  라벨 부분 */}
      <label className="label" htmlFor={name}>
        <span className="label-text font-bold">{labelText}</span>
        <span className="label-text-alt">{inputCondition}</span>
      </label>

      {/*  Input부분*/}
      <input
        className="input-bordered input w-full"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />

      {/*  Input의 유효성 검사 결과 출력 메시지 부분 */}
      <AlertInputStateMsg value={true} name={error?.message} />
    </div>
  );
}
