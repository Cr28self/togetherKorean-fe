// Public 페이지들에서 사용되는 페이지 배너
export default function InfoBanner({ children }) {
  return (
    <div
      className={'mb-10 bg-gray-100 p-10  text-center text-base sm:text-xl '}
    >
      {children}
    </div>
  );
}
