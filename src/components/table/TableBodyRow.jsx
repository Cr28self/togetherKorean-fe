// TableBody의 하나의 행
export default function TableBodyRow({ idx, children }) {
  return (
    <tr className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
      {children}
    </tr>
  );
}
