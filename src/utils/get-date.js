// wdate를 생성해내기 위한 js 함수
export function getWdate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear(); // 연도
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월
  const day = String(currentDate.getDate()).padStart(2, '0'); // 일

  return `${year}-${month}-${day}`;
}
