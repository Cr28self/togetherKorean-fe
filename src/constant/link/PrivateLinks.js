// Admin 링크 모음
const PATH_ADMIN = {
  HOME: '/admin',
  LEARNER_MANAGEMENT: {
    INFO: {
      ROUTE: '/learner',
      LINKS: '/admin/learner',
      TITLE: '개인 정보',
    },
    INPUT_FORM: {
      ROUTE: '/learner/:learnerCode',
      TITLE: '학습자 수정',
      LINKS_FUNC: (learnerCode) => `/admin/learner/${learnerCode}`,
    },
  },
  TEACHER_MANAGEMENT: {
    INFO: {
      ROUTE: '/teacher',
      LINKS: '/admin/teacher',
      TITLE: '개인 정보',
    },
    CREATE: {
      ROUTE: '/teacher/create',
      LINKS: '/admin/teacher/create',
      TITLE: '강의자 생성',
    },

    INPUT_FORM: {
      ROUTE: '/teacher/:teacherCode',
      TITLE: '강의자 수정',
      LINKS_FUNC: (teacherCode) => `/admin/teacher/${teacherCode}`,
    },
  },
  ANNOUNCEMENT: {
    INFO: {
      ROUTE: '/announcement',
      LINKS: '/admin/announcement',
      TITLE: '계약서 관리',
    },
  },
};

// Learner / Teacher 링크 모음
const PATH_PRIVATE = {
  ADMIN: PATH_ADMIN,
  LEARNER: {
    HOME: '/learner',
    S_PLAN: {
      ROUTE: '/splan',
      LINKS: '/learner/splan',
      TITLE: '학습 계획표',
    },
    COURSE: {
      ROUTE: '/course',
      LINKS: '/learner/course',
      TITLE: '강의 목록 조회',
    },
    ENROLL: {
      ROUTE: '/enroll',
      LINKS: '/learner/enroll',
      TITLE: '수강 신청',
    },
    ATTENDANCE: {
      ROUTE: '/attendance',
      LINKS: '/learner/attendance',
      TITLE: '출석',
    },
  },

  TEACHER: {
    HOME: '/teacher',
    LECTURE_MANAGEMENT: {
      INFO: {
        ROUTE: '/lecture-management',
        LINKS: '/teacher/lecture-management',
        TITLE: '강의 관리',
      },
      INPUT_FORM: {
        ROUTE: '/lecture-management/:lectureCode',
        TITLE: '강의 수정',
        LINKS_FUNC: (lectureCode) => `/teacher/lecture/${lectureCode}`,
      },
      CREATE: {
        ROUTE: 'lecture-management/:teacherCode/create',
        TITLE: '강의 생성',
        LINKS_FUNC: (teacherCode) => `/teacher/lecture/${teacherCode}/create`,
      },
    },
  },
};

export { PATH_PRIVATE };
