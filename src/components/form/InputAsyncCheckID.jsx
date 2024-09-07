import { useController } from 'react-hook-form';
import { useRef, useState } from 'react';
import AlertInputStateMsg from './AlertInputStateMsg.jsx';

// 회원가입 시, 아이디 중복체크전용 input
export default function InputAsyncCheckID({ control, name, trigger, rules }) {
  const {
    field: { ref, onChange, value, ...inputProps },
    fieldState: { invalid, error, isDirty },
  } = useController({
    name,
    control,
    rules,
  });

  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  // input에 입력할때마다 이 함수가 실행됨
  const handleChange = async (event) => {
    onChange(String(event.target.value));

    setIsLoading(true);

    // 이전 setTimeout값 제거
    clearTimeout(timeoutRef.current);

    // 0.7초 뒤에 input 요소의 유효성 검사 수행
    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);

      // validate에 정의한 debounce함수가 실행됨
      trigger('id');
    }, 700);
  };

  return (
    <div className={'mb-4'}>
      <label className="label" htmlFor={name}>
        <span className="label-text font-bold">학습자 아이디</span>
      </label>
      <input
        type="text"
        placeholder="아이디를 입력해주세요"
        className="input-bordered input w-full"
        {...inputProps}
        value={value}
        ref={ref}
        onChange={handleChange}
      />
      <label className="label">
        {isLoading ? (
          <span className={'loading loading-dots loading-xs'}></span>
        ) : (
          (isDirty || invalid) &&
          (error?.message ? (
            <AlertInputStateMsg value={true} name={error?.message} />
          ) : (
            <AlertInputStateMsg value={false} name={'사용 가능한 아이디'} />
          ))
        )}
      </label>
    </div>
  );
}
