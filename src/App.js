import Header from './header/Header';
import Home from './home/Home';
import './index.scss';
import { Route, Routes } from 'react-router-dom'
import SchoolHistory from './pages/SchoolHistory';
import TeachingStaff from './pages/TeachingStaff';
import LyceumTarget from './pages/LyceumTarget';
import Visionary from './pages/Visionary';
import SchoolGoal from './pages/SchoolGoal';
import Information from './information/Information';

function App() {
  return (
    <div className='wrapper clear'>
      <Header />
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='schoolhistory' element={<SchoolHistory />} />
          <Route path='teachingstaff' element={<TeachingStaff />} />
          <Route path='lyceumTarget' element={<LyceumTarget />} />
          <Route path='visionary' element={<Visionary />} />
          <Route path='schoolGoal' element={<SchoolGoal />} />
        </Routes>
      </div>
      <Information />
    </div>
  );
}

export default App;
