// 아코디언 형식으로 데이터를 보여주는 컴포넌트
// 학생 활동의 Q & A 페이지에서 사용됨
export default function Accordion({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="collapse-plus collapse mb-2 bg-base-200">
          <input type="radio" className={'w-full'} name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">{item.title}</div>
          <div className="collapse-content">
            <p>{item.contents}</p>
          </div>
        </div>
      ))}
    </>
  );
}
