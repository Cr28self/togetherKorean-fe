import { useController } from 'react-hook-form';

// Form에서 성별( 남,여 )를 고르는 컴포넌트
export default function GenderSelection({
  labelText,
  name,
  rules,
  control,
  disabled,
}) {
  const {
    field: { value, onChange },
  } = useController({ name, rules, control });

  return (
    <div>
      {/*  Previous */}

      <label
        className="text-grey-darker mb-2 block text-sm font-bold"
        htmlFor={'gender'}
      >
        {labelText}
      </label>
      <div className="mb-4 flex justify-between">
        {/*  라디오 버튼 ( 남자 - 0 )*/}
        <div className="flex w-full items-center rounded border border-gray-200 pl-4">
          <input
            id={'male'}
            type="radio"
            value={0}
            name={name}
            checked={value == 0}
            className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            disabled={disabled}
          />
          <label
            htmlFor={name}
            className="ml-2 w-full py-4 text-sm font-medium text-gray-900"
          >
            남자
          </label>
        </div>
        {/*  라디오 버튼 ( 여자 - 1 )*/}
        <div className="flex w-full items-center rounded border border-gray-200 pl-4">
          <input
            id={'female'}
            type="radio"
            value={1}
            name={name}
            checked={value == 1}
            className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500"
            onChange={onChange}
            disabled={disabled}
          />
          <label
            htmlFor={name}
            className="ml-2 w-full py-4 text-sm font-medium text-gray-900"
          >
            여자
          </label>
        </div>
      </div>
    </div>
  );
}
