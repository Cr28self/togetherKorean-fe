// 홈페이지에서  Board를 보여주는 컴포넌트
export default function Board({ children }) {
  return (
    <div
      className={
        'relative aspect-video space-y-2 overflow-hidden rounded-lg bg-white p-4 shadow'
      }
    >
      {children}
    </div>
  );
}
