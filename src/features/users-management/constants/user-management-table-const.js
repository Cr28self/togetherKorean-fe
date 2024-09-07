// 유저 관리 테이블에서 사용되는 Table Header 상수들
export const USER_MANAGEMENT_TABLE = {
  HEAD: {
    LEARNER_INFO: [
      '아이디',
      '이름',
      '성별',
      '생년월일',
      '전화번호',
      '이메일',
      'wdate',
      '기타',
    ],
    TEACHER_INFO: [
      'file',
      '강사 코드',
      '아이디',
      '비밀번호',
      '성명',
      '성별',
      '주민번호',
      '전화번호',
      '이메일',
      'wdate',
      '기타',
    ],
    Announcement: [
      '강사 코드',
      '성명',
      '계약서명',
      '계약서(파일)',
      '계약일자',
      '수정일자',
      '강의시간',
    ],
  },

  BODY: {
    LEARNER_INFO: ['id', 'name', 'gender', 'tel', 'email', 'wdate', 'etc'],
  },
};
