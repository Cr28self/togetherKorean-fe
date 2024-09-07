import { Link } from 'react-router-dom';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';
import logo from '../../assets/logo.jpeg';

export default function FooterLogo() {
  return (
    <Link
      to={PATH_PUBLIC.HOME}
      className="flex w-1/2  max-w-[360px] items-center justify-center sm:w-1/3 md:justify-start lg:w-1/4"
    >
      <img src={logo} alt="logo" />
    </Link>
  );
}
