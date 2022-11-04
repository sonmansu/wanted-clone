import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import JobList from './pages/JobList';
import JobDetail from './pages/JobDetail';
import SearchPage from './pages/SearchPage';
import RecruitPage from 'pages/RecruitPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/jobList'>
          <Route index element={<JobList />} />
          <Route path=':mainId' element={<JobList />} />
          <Route path=':mainId/:subId' element={<JobList />} />
        </Route>
        <Route path='/jobDetail/:jobId' element={<JobDetail />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/recruit' element={<RecruitPage />} />
      </Route>
    </Routes>
  );
}

export default App;
