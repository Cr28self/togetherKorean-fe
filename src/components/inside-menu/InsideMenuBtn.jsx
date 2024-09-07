import { Link } from 'react-router-dom';

export default function InsideMenuBtn({ link, text }) {
  return (
    <Link to={link} className={'w-full lg:w-1/5'}>
      <button
        className={
          'btn-accent min-h-6 btn h-14 w-full whitespace-nowrap rounded-3xl border-2 border-white bg-[#716C26] px-4 text-[10px] text-white hover:border-[#363311] hover:bg-[#363311] sm:text-xs lg:px-6 lg:text-base'
        }
        type={'button'}
      >
        {text}
      </button>
    </Link>
  );
}
