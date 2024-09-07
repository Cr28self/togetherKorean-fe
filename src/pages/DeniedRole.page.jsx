import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

//접근 권한이 거부되었을 경우 보여지는 페이지
export default function DeniedRolePage() {
  const navigate = useNavigate();

  //이 페이지에 접속하면 1초 이후에 Public HomePage 페이지로 리다이렉트
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }, []);

  return (
    <div className={'flex h-full items-center justify-center'}>
      <div className="bg-white px-40 py-20 ">
        <div className="flex flex-col items-center">
          <h1 className="text-black-600 text-4xl font-bold">Access Denied</h1>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            Go to Home Page...
          </p>

          <Link
            to={'/'}
            className="bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
