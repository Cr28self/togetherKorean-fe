// 회원가입 시, 회원가입할 user의 권한에 따른 요청 데이터의 키값 상수
const JOIN_KEY = {
  // 강의자로 회원가입할 경우
  teacher: {
    id: 'id',
    password: 'password',
    name: 'name',
    gender: 'gender',
    ssnum: 'ssnum',
    tel: 'tel',
    email: 'email',
    etc: 'etc',
  },
  //학습자로 회원가입할 경우
  learner: {
    id: 'id',
    password: 'password',
    name: 'lname',
    gender: 'gender',
    birthday: 'birthday',
    tel: 'tel',
    email: 'email',
    etc: 'etc',
  },
};

// 로그인 시, 요청 데이터의 키값 상수
const LOGIN_KEY = {
  ID: 'id',
  PASSWORD: 'password',
};

export { JOIN_KEY, LOGIN_KEY };
