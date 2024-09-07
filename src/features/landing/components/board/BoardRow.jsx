export default function BoardRow({ type, title, wdate }) {
  return (
    <div
      className={'relative flex items-center justify-between gap-4 p-2 shadow'}
    >
      <div className={'flex items-center gap-4 overflow-x-hidden'}>
        <p className={'my-0 whitespace-nowrap text-xs text-gray-500'}>{type}</p>

        <p className={'my-0 whitespace-nowrap break-keep text-xs font-bold'}>
          {title}
        </p>
      </div>

      <p className={'my-0 text-[10px] text-gray-500'}>{wdate}</p>
    </div>
  );
}
