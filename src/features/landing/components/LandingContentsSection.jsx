// Public 페이지의 각 내부 컨텐츠 Section을 감싸서 영역을 구분해주는 컴포넌트
// ( 컨텐츠 Section제목, 컨텐츠 내용(children) )
export default function LandingContentsSection({ title, children }) {
  return (
    <article className={'prose mx-4 max-w-full '}>
      {title && <p className={'text-2xl md:text-3xl'}>{title}</p>}

      {children}
    </article>
  );
}
