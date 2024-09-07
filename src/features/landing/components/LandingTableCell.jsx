// 공지사항 페이지에서 사용되는 Table의  TableCell
export default function LandingTableCell({ data }) {
  return (
    <td className={'whitespace-nowrap p-3 text-sm text-gray-700'}>{data}</td>
  );
}
