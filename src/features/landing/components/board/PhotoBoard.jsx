// 홈페이지에서 사진 갤러리 Board를 보여주는 컴포넌트
export default function PhotoBoard({ children }) {
  return (
    <div
      className={
        'relative grid aspect-video grid-cols-3 gap-4 overflow-hidden rounded-lg bg-white p-4 shadow'
      }
    >
      {children}
    </div>
  );
}
