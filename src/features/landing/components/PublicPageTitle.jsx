// 페이지 상단의 존재하여, 페이지를 소개하는 Section ( 페이지 icon / 페이지 제목 / 구분선 )
export default function PublicPageTitle({ icon, title }) {
  return (
    <>
      <div className={'my-10 flex flex-col items-end px-5 pt-3 text-2xl'}>
        {icon}

        <p> {title}</p>
      </div>
      <div className={'divider '}></div>
    </>
  );
}
