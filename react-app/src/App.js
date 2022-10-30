import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import JobList from './pages/JobList';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/joblist'>
          <Route index element={<JobList />} />
          <Route path=':mainId' element={<JobList />} />
          <Route path=':mainId/:subId' element={<JobList />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
