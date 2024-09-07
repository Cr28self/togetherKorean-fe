// 비대면 수업 페이지에서 각 Class들에 대한 정보를  Table로 보여주는 컴포넌트
export default function ClassTable({ tableTitle, headData, bodyData }) {
  return (
    <div className={'block w-full overflow-auto rounded-lg shadow'}>
      <h4 className={'text-center'}>{tableTitle}</h4>
      <table className={'w-full'}>
        {/*  Head*/}
        <thead className={'border-b-2 border-gray-200 bg-gray-50'}>
          <tr>
            {headData?.map((headCell, idx) => {
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
        <tbody className={'divide-y divide-gray-200'}>
          {bodyData?.map((item, index) => {
            return (
              <tr key={index}>
                <td className={'whitespace-nowrap p-3 text-sm text-gray-700'}>
                  {item.key}
                </td>
                <td className={'whitespace-nowrap p-3 text-sm text-gray-700'}>
                  {item.value}
                </td>
              </tr>
            );
          })}
        </tbody>
        {/*  Body*/}
      </table>
    </div>
  );
}
