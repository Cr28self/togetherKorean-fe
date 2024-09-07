import { Link } from 'react-router-dom';
import { PATH_PUBLIC } from '../constant/link/PublicLinks.js';

//유효하지 않는 url 경로에 접근하였을 경우, NotFoundPage로 리다이렉트 됨
export default function NotFoundPage() {
  return (
    <div className={'flex items-center justify-center'}>
      <div className="bg-white px-40 py-20 ">
        <div className="flex flex-col items-center">
          {/*404 문구*/}
          <h1 className="text-black-600 text-8xl font-bold">404</h1>

          {/* Page not found 문구 */}
          <h6 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not found
          </h6>

          {/* The page you’re looking for doesn’t exist. 문구 */}
          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          {/* 홈페이지로 이동하는 Link 버튼*/}
          <Link
            to={PATH_PUBLIC.HOME}
            className="bg-blue-100 px-6 py-2 text-sm font-semibold text-blue-800"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
