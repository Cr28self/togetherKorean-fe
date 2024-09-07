import { useController } from 'react-hook-form';
import AlertInputStateMsg from './AlertInputStateMsg.jsx';

// Textarea 전용 input
export default function TextAreaInput({
  labelText,
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
      <label className="label" htmlFor={name}>
        <span className="label-text font-bold">{labelText}</span>
        <span className="label-text-alt">{inputCondition}</span>
      </label>

      <textarea
        className="input-bordered input h-[200px] w-full resize-none"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      ></textarea>

      <AlertInputStateMsg value={true} name={error?.message} />
    </div>
  );
}
