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
import AssessmentOfStudents from './pages/AssessmentOfStudents';
import RulesFordAmission from './pages/RulesFordAmission';
import { newsList } from './notifications/NotificationData';
import Notifications from './notifications/Notifications';
import NotificationsElem from './notifications/NotificationsElem';
function App() {
  return (
    <div className='wrapper clear'>
      <Header />
      <div className='app-wrapper-content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='SchoolWebsite' element={<Home />} />
          <Route path='schoolhistory' element={<SchoolHistory />} />
          <Route path='teachingstaff' element={<TeachingStaff />} />
          <Route path='lyceumTarget' element={<LyceumTarget />} />
          <Route path='visionary' element={<Visionary />} />
          <Route path='schoolGoal' element={<SchoolGoal />} />
          <Route path='assessmentOfStudents' element={<AssessmentOfStudents />} />
          <Route path='rulesFordAmission.js' element={<RulesFordAmission />} />
          <Route path = 'notification/:id' element = {<NotificationsElem />}/>
          {/* {newsList.map((news) => (
            <Route
              key={news.id}
              path={`/news/${news.id}`}
              element={<Notifications title={news.title} description={news.description} />}
            />
          ))} */}
        </Routes>
      </div>
      <div className="NotificationData">
        {newsList.map((news) => (
          <Notifications key = {news.id} id = {news.id} title={news.title} description={news.description} />
        ))}
      </div>

      <Information />
    </div>
  );
}

export default App;
