export default function PublicBoardWrapper({ children }) {
  return (
    <div className={'grid h-[300px] grid-cols-1 gap-4 sm:grid-cols-2'}>
      {children}
    </div>
  );
}
