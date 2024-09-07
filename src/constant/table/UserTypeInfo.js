//회원가입 form, 테이블에서 사용되는 키값들을 모아논 상수들..
export const UserTypeInfo = {
  //회원가입 form에서 회원가입할 user에 따라 사용되는 키값
  joinType: {
    //강의자로 회원가입할 경우
    teacher: {
      id: 'id',
      password: 'password',
      name: 'name',
      gender: 'gender',
      ssnum: 'ssnum',
      tel: 'tel',
      email: 'email',
      wdate: 'wdate',
      etc: 'etc',
    },
    //학습자로 회원가입할 경우
    learner: {
      id: 'learnerId',
      password: 'password',
      name: 'lname',
      gender: 'gender',
      birthday: 'birthday',
      tel: 'tel',
      email: 'email',
      wdate: 'wdate',
      etc: 'etc',
    },
  },
};

export const FORM_TYPE = {};

export const TABLE_TYPE = {
  HEAD: {
    ADMIN: {
      LearnerInfo: [
        '아이디',
        '비밀번호',
        '이름',
        '성별',
        '생년월일',
        '전화번호',
        '이메일',
        'wdate',
        '기타',
      ],
      TeacherInfo: [
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

    TEACHER: {
      LectureInfo: [
        '강의 코드',
        'OpenDate',
        '강의 이름',
        '강의 콘텐츠',
        '강의 링크',
        'wdate',
      ],
    },

    LEARNER: {
      LearnerSplan: [
        '회차',
        '날짜',
        '요일',
        '강의 시간',
        '수업 내용',
        '줌 링크',
        '강의 자료(첨부)',
        '일일 학습(첨부)',
        '계획표 표출 Tag',
      ],
      LearnerCourse: [
        '강의 코드',
        '날짜',
        '요일',
        '강사',
        '정원',
        '강의 시간',
        '수업 내용',
        '줌 링크',
      ],
    },
  },
  BODY: {},
};
