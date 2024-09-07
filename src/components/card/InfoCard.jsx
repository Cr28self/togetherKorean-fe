// 현재 로그인한 user의 정보를 Card로 보여줌
export default function InfoCard({ userInfoData }) {
  return (
    <div className={'max-w-2xl'}>
      <div className="group relative block  bg-white before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-dashed before:border-gray-900">
        <div className="rounded-lg border-2 border-gray-900 bg-white transition group-hover:-translate-y-2 ltr:group-hover:-translate-x-2 rtl:group-hover:translate-x-2">
          <div className="p-4 sm:p-6">
            <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">
              {userInfoData?.lname} 님
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
