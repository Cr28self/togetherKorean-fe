// 공지사항 페이지에서 사용되는 테이블
export default function NotifyTable({ tableTitle, headData, children }) {
  return (
    <div className={'block w-full overflow-auto rounded-lg shadow'}>
      <h4 className={'text-center'}>{tableTitle}</h4>
      <table className={'w-full'}>
        {/*  Head*/}
        <thead className={'border-b-2 border-gray-200 bg-gray-50'}>
          <tr>
            {headData.map((headCell, idx) => {
              return (
                <th
                  key={idx}
                  className={
                    'whitespace-nowrap p-3 text-left text-sm font-semibold tracking-wide text-black'
                  }
                >
                  {headCell}
                </th>
              );
            })}
          </tr>
        </thead>
        {/*  Head*/}

        {/*  Body*/}
        <tbody className={'divide-y divide-gray-200'}>{children}</tbody>
        {/*  Body*/}
      </table>
    </div>
  );
}
