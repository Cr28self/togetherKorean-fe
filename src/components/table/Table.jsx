// Table 컴포넌트
// Table Header에 들어갈 내용을 인수로 받으며, children으로 테이블 body에 들어갈 내용을 받음
export default function Table({ headData, children }) {
  return (
    <div className={'block overflow-auto rounded-lg shadow '}>
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

            <th
              className={
                'p-3 text-left text-sm font-semibold tracking-wide text-black'
              }
            >
              Action
            </th>
          </tr>
        </thead>
        {/*  Head*/}

        {/*  Body*/}
        <tbody className={'divide-y divide-gray-200'}>
          {children?.length ? (
            children
          ) : (
            <tr>
              <th colSpan={headData.length + 1} rowSpan={4}>
                <p>No Found Data!!</p>
              </th>
            </tr>
          )}
        </tbody>
        {/*  Body*/}
      </table>
    </div>
  );
}
