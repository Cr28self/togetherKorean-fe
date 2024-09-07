// SideMenu의 메뉴의 하위 메뉴 List들을 표시하기 위한 컴포넌트
export default function CollasibleMenuItemList({ title, itemList }) {
  return (
    <li>
      <details open>
        <summary className={'font-bold'}>{title}</summary>
        <ul>
          {itemList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </details>
    </li>
  );
}
