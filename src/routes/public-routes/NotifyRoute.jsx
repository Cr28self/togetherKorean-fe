import { Route, Routes } from 'react-router-dom';

import NotFoundPage from '../../pages/NotFound.page.jsx';
import NotifyPage from '../../pages/public/Notify/Notify.page.jsx';
import ContentsPage from '../../pages/public/Notify/Contents.page.jsx';
import PhotoGalleryPage from '../../pages/public/Notify/PhotoGallery.page.jsx';
import { PATH_PUBLIC } from '../../constant/link/PublicLinks.js';

//Public 메뉴의 공지사항 Route
export default function NotifyRoute() {
  return (
    <>
      <Routes>
        {/*공지사항 페이지*/}
        <Route index element={<NotifyPage />} />

        {/*자료실 페이지*/}
        <Route
          path={PATH_PUBLIC.NOTIFY.CONTENTS.ROUTE}
          element={<ContentsPage />}
        />

        {/*사진 갤러리 페이지*/}
        <Route
          path={PATH_PUBLIC.NOTIFY.GALLERY.ROUTE}
          element={<PhotoGalleryPage />}
        />

        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
