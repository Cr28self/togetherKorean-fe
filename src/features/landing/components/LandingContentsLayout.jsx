// Public 페이지들의 내용이 직접적으로 들어감
// LandingContentsSection 내부에 호출하여, Contents Section 내부에 어떤 내용이 들어가는지 인수로 받아 보여주는 컴포넌트
export default function LandingContentsLayout({ icon, sentence }) {
  return (
    <div
      className={
        'mx-auto flex w-3/4 flex-col items-center gap-10 py-6 md:flex-row md:gap-20'
      }
    >
      {icon}

      {/* 컨텐츠의 내용을 보여줌 */}
      <div className={'w-full'}>{sentence}</div>
    </div>
  );
}
