export default function PhotoBoardRow({ imgLink }) {
  return (
    <div className="w-30 card card-compact aspect-square bg-base-100 shadow-xl">
      <figure className={'my-0 h-full rounded-lg'}>
        <img className={'h-full'} src={imgLink} alt="Add Photo" />
      </figure>
    </div>
  );
}
