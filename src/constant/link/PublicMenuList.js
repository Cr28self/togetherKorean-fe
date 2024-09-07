import { PATH_PUBLIC } from './PublicLinks.js';

// Navbar / SideMenu에 공통으로 사용되는 Public 링크들 모음
const PUBLIC_MENU_LIST_ARRAY = [
  // GUIDE
  {
    MAIN_TITLE: PATH_PUBLIC.GUIDE.MAIN_TITLE,
    itemList: [
      {
        link: PATH_PUBLIC.GUIDE.INDEX.LINKS,
        title: PATH_PUBLIC.GUIDE.INDEX.TITLE,
      },
      {
        link: PATH_PUBLIC.GUIDE.TEACHER.LINKS,
        title: PATH_PUBLIC.GUIDE.TEACHER.TITLE,
      },
      {
        link: PATH_PUBLIC.GUIDE.LOCATION.LINKS,
        title: PATH_PUBLIC.GUIDE.LOCATION.TITLE,
      },
    ],
  },

  //   CLASS
  {
    MAIN_TITLE: PATH_PUBLIC.CLASS.MAIN_TITLE,
    itemList: [
      {
        link: PATH_PUBLIC.CLASS.INDEX.LINKS,
        title: PATH_PUBLIC.CLASS.INDEX.TITLE,
      },
      {
        link: PATH_PUBLIC.CLASS.NON_FACE.LINKS,
        title: PATH_PUBLIC.CLASS.NON_FACE.TITLE,
      },
    ],
  },

  //   Entrance
  {
    MAIN_TITLE: PATH_PUBLIC.ENTRANCE.MAIN_TITLE,
    itemList: [
      {
        link: PATH_PUBLIC.ENTRANCE.INDEX.LINKS,
        title: PATH_PUBLIC.ENTRANCE.INDEX.TITLE,
      },
      {
        link: PATH_PUBLIC.ENTRANCE.MASTER.LINKS,
        title: PATH_PUBLIC.ENTRANCE.MASTER.TITLE,
      },
    ],
  },

  //   Learner Activity

  {
    MAIN_TITLE: PATH_PUBLIC.LEARNER_ACTIVITY.MAIN_TITLE,
    itemList: [
      {
        link: PATH_PUBLIC.LEARNER_ACTIVITY.INDEX.LINKS,
        title: PATH_PUBLIC.LEARNER_ACTIVITY.INDEX.TITLE,
      },
      {
        link: PATH_PUBLIC.LEARNER_ACTIVITY.BOARD.LINKS,
        title: PATH_PUBLIC.LEARNER_ACTIVITY.BOARD.TITLE,
      },
    ],
  },

  //   Teacher Activity

  {
    MAIN_TITLE: PATH_PUBLIC.TEACHER_ACTIVITY.MAIN_TITLE,
    itemList: [
      {
        link: PATH_PUBLIC.TEACHER_ACTIVITY.INDEX.LINKS,
        title: PATH_PUBLIC.TEACHER_ACTIVITY.INDEX.TITLE,
      },
      {
        link: PATH_PUBLIC.TEACHER_ACTIVITY.NOTIFICATION.LINKS,
        title: PATH_PUBLIC.TEACHER_ACTIVITY.NOTIFICATION.TITLE,
      },
      {
        link: PATH_PUBLIC.TEACHER_ACTIVITY.BOARD.LINKS,
        title: PATH_PUBLIC.TEACHER_ACTIVITY.BOARD.TITLE,
      },
    ],
  },

  //   Notify
  {
    MAIN_TITLE: PATH_PUBLIC.NOTIFY.MAIN_TITLE,
    itemList: [
      {
        link: PATH_PUBLIC.NOTIFY.INDEX.LINKS,
        title: PATH_PUBLIC.NOTIFY.INDEX.TITLE,
      },
      {
        link: PATH_PUBLIC.NOTIFY.CONTENTS.LINKS,
        title: PATH_PUBLIC.NOTIFY.CONTENTS.TITLE,
      },
      {
        link: PATH_PUBLIC.NOTIFY.GALLERY.LINKS,
        title: PATH_PUBLIC.NOTIFY.GALLERY.TITLE,
      },
    ],
  },
];

export { PUBLIC_MENU_LIST_ARRAY };
