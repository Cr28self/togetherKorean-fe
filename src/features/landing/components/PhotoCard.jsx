// 사진 갤러리에서 각 사진들을 카드로 표시해주는 컴포넌트
export default function PhotoCard({ imgLink, title, description, tagList }) {
  return (
    <div className="w-50 card card-compact bg-base-100 shadow-xl">
      {/*  카드 이미지*/}
      <figure className={'my-0 h-4/5 sm:h-72 md:h-52'}>
        <img className={'h-full'} src={imgLink} alt="Add Photo" />
      </figure>

      <div className="card-body">
        {/*  제목*/}
        <h2 className="card-title mt-2">{title}</h2>
        {/*설명*/}
        <p>{description}</p>
        {/*  태그List 표시*/}
        <div className="card-actions justify-end">
          {tagList.map((tag, index) => (
            <div key={index} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
