import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';
import SearchPage from './pages/SearchPage';
import RecruitPage from 'pages/RecruitPage';
import BookmarkPage from 'pages/BookmarkPage';
import KakaoRedirectHandler from 'pages/KakaoRedirectHandler';
import ResumePage from 'pages/ResumePage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobList'>
          <Route index element={<JobListPage />} />
          <Route path=':mainId' element={<JobListPage />} />
          <Route path=':mainId/:subId' element={<JobListPage />} />
        </Route>
        <Route path='/jobDetail/:jobId' element={<JobDetailPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/recruit' element={<RecruitPage />} />
        <Route path='/profile/bookmarks' element={<BookmarkPage />} />
        <Route path="/kakaoLogin" element={<KakaoRedirectHandler />} />
        <Route path="/resume" element={<ResumePage />} />
      </Route>
    </Routes>
  );
}

export default App;
