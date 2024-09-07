// 최상위에서 테이블 Contents를 감싸는 테이블 Wrapper 컴포넌트
export default function TableContentsWrapper({ children }) {
  return <div className={'bg-gray-100 p-5'}>{children}</div>;
}
