import { PATH_PRIVATE } from './PrivateLinks.js';

// 프로필 사진 누르면 나오는 메뉴 링크들 모음

// Admin
export const PROFILE_MENU_LINKS_ADMIN = {
  PROFILE_LINK: PATH_PRIVATE.ADMIN.HOME,

  LEARNER_LIST: [
    {
      link: PATH_PRIVATE.ADMIN.LEARNER_MANAGEMENT.INFO.LINKS,
      text: PATH_PRIVATE.ADMIN.LEARNER_MANAGEMENT.INFO.TITLE,
    },
  ],

  TEACHER_LIST: [
    {
      link: PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.INFO.LINKS,
      text: PATH_PRIVATE.ADMIN.TEACHER_MANAGEMENT.INFO.TITLE,
    },

    {
      link: PATH_PRIVATE.ADMIN.ANNOUNCEMENT.INFO.LINKS,
      text: PATH_PRIVATE.ADMIN.ANNOUNCEMENT.INFO.TITLE,
    },
  ],
};

// Teacher
export const PROFILE_MENU_LINKS_TEACHER = {
  PROFILE_LINK: PATH_PRIVATE.TEACHER.HOME,

  MENU_LIST: [
    {
      link: PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.INFO.LINKS,
      text: PATH_PRIVATE.TEACHER.LECTURE_MANAGEMENT.INFO.TITLE,
    },
  ],
};

// Learner
export const PROFILE_MENU_LINKS_LEARNER = {
  PROFILE_LINK: PATH_PRIVATE.LEARNER.HOME,
  MENU_LIST: [
    {
      link: PATH_PRIVATE.LEARNER.S_PLAN.LINKS,
      text: PATH_PRIVATE.LEARNER.S_PLAN.TITLE,
    },
    {
      link: PATH_PRIVATE.LEARNER.COURSE.LINKS,
      text: PATH_PRIVATE.LEARNER.COURSE.TITLE,
    },
    {
      link: PATH_PRIVATE.LEARNER.ENROLL.LINKS,
      text: PATH_PRIVATE.LEARNER.ENROLL.TITLE,
    },
    {
      link: PATH_PRIVATE.LEARNER.ATTENDANCE.LINKS,
      text: PATH_PRIVATE.LEARNER.ATTENDANCE.TITLE,
    },
  ],
};
