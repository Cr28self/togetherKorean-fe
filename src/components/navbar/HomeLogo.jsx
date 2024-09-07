import { Link } from 'react-router-dom';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';
import logo from '../../assets/logo.jpeg';

// 로고
export default function HomeLogo() {
  return (
    <div className="w-2/5 max-w-[300px] flex-shrink-0 sm:w-1/2 md:w-1/3">
      <Link to={PATH_PUBLIC.HOME}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}
