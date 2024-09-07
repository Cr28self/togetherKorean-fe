import { useState } from 'react';
// Navbar에 언어 선택하는 button을 담고있는 Form
export default function SelectLangForm() {
  const [locale, setLocale] = useState(localStorage.getItem('locale') ?? 'ko');
  return (
    <form
      className={'flex justify-end gap-2 text-xl '}
      onSubmit={() => {
        localStorage.setItem('locale', locale);
      }}
    >
      <button type={'submit'} onClick={() => setLocale('ko')}>
        🇰🇷
      </button>
      <button type={'submit'} onClick={() => setLocale('en-US')}>
        🇺🇸
      </button>
      <button type={'submit'} onClick={() => setLocale('zh')}>
        🇨🇳
      </button>
    </form>
  );
}
