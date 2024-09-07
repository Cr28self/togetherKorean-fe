export default function InsideMenuWrapper({ children }) {
  return (
    <div
      className={
        'inline-grid w-full grid-cols-3 place-items-center gap-1 bg-[#CDCBA8] px-2 py-16 sm:gap-5 lg:flex lg:justify-around'
      }
    >
      {children}
    </div>
  );
}
