//URL 라우팅 경로와 관련된 상수들

// 누구나 접근 가능한 Public한 링크들 모음 ( Admin제외 )
const PATH_PUBLIC = {
  HOME: '/',
  GUIDE: {
    MAIN_TITLE: 'Together Korean 안내',
    INDEX: {
      LINKS: '/guide',
      TITLE: 'Together Korean 소개',
    },
    TEACHER: {
      ROUTE: '/teacher',
      LINKS: '/guide/teacher',
      TITLE: '선생님 소개',
    },
    LOCATION: {
      ROUTE: '/location',
      LINKS: '/guide/location',
      TITLE: '찾아오시는 길',
    },
  },
  CLASS: {
    MAIN_TITLE: '한국어 수업',
    INDEX: {
      LINKS: '/class',
      TITLE: '대면 수업(준비중)',
    },
    NON_FACE: {
      ROUTE: '/nonface',
      LINKS: '/class/nonface',
      TITLE: '비대면 수업',
    },
  },
  ENTRANCE: {
    MAIN_TITLE: '대학·대학원 입학',
    INDEX: {
      LINKS: '/entrance',
      TITLE: '대학 입학',
    },
    MASTER: {
      ROUTE: '/master',
      LINKS: '/entrance/master',
      TITLE: '대학원 입학',
    },
  },
  LEARNER_ACTIVITY: {
    MAIN_TITLE: '학생 활동',
    INDEX: {
      LINKS: '/l-activity',
      TITLE: 'Q & A',
    },
    BOARD: {
      ROUTE: '/board',
      LINKS: '/l-activity/board',
      TITLE: '자유 게시판',
    },
  },
  TEACHER_ACTIVITY: {
    MAIN_TITLE: '선생님 활동',
    INDEX: {
      LINKS: '/t-activity',
      TITLE: '구직 요청',
    },
    NOTIFICATION: {
      ROUTE: '/notification',
      LINKS: '/t-activity/notification',
      TITLE: '선생님 공지',
    },
    BOARD: {
      ROUTE: '/board',
      LINKS: '/t-activity/board',
      TITLE: '선생님 게시판',
    },
  },
  NOTIFY: {
    MAIN_TITLE: '공지 사항',
    INDEX: {
      LINKS: '/notify',
      TITLE: '공지 사항',
    },
    CONTENTS: {
      ROUTE: '/contents',
      LINKS: '/notify/contents',
      TITLE: '자료실',
    },
    GALLERY: {
      ROUTE: '/gallery',
      LINKS: '/notify/gallery',
      TITLE: '사진 갤러리',
    },
  },
};

export { PATH_PUBLIC };
