// TableBody의 하나의 Cell
export default function TableBodyCell({ data }) {
  return (
    <td className={'whitespace-nowrap p-3 text-sm text-gray-700'}>{data}</td>
  );
}
