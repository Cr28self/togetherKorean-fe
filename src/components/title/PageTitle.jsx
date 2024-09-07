//페이지 컴포넌트에 사용되며, 페이지 제목 스타일링하는 컴포넌트
export default function PageTitle({ children }) {
  return (
    <article className={'prose mb-4 max-w-full text-center '}>
      <h2>{children}</h2>
    </article>
  );
}
