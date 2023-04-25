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
import Schedule from './schedule/Schedule';
import StudentsRule from './pages/StudentsRule';
import Traditions from './pages/Traditions';
import PersonalDataProtection from './pages/PersonalDataProtection';
import Statut from './pages/Statut';
import Content from './pages/Content';
import RecommendationsForRaisingASuccessfulStudent from './pages/RecommendationsForRaisingASuccessfulStudent';
import RightsAndObligationsOfParentsOrPersonsInLocoParentis from './pages/RightsAndObligationsOfParentsOrPersonsInLocoParentis';
import WorkOfThePsychologicalService from './pages/WorkOfThePsychologicalService';
import EducationalPrograms from './pages/EducationalPrograms';
import Olympics from './pages/Olympics';
import EducationalProjects from './pages/EducationalProjects';
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
          <Route path='rulesFordAmission' element={<RulesFordAmission />} />
          <Route path = 'notification/:id' element = {<NotificationsElem />}/>
          <Route path = 'schedule' element = {<Schedule />}/>
          <Route path = 'studentsRule' element = {<StudentsRule />}/>
          <Route path = 'traditions' element = {<Traditions />}/>
          <Route path = 'personalDataProtection' element = {<PersonalDataProtection />}/>
          <Route path = 'statute' element = {<Statut />}/>
          <Route path = 'content' element = {<Content/>}/>
          <Route path = 'clubsAndSections' element = {<Content/>}/>
          <Route path = 'protectionOfChildrensRights' element = {<Content/>}/>
          <Route path = 'preventionOfInjuriesDuringTheEducationalProcess' element = {<Content/>}/>
          <Route path = 'complianceWithInternalRegulations' element = {<Content/>}/>
          <Route path = 'Food' element = {<Content/>}/>
          <Route path = 'rulesOfBehaviorDuringTheHolidays' element = {<Content/>}/>
          <Route path = 'studentSelf-government' element = {<Content/>}/>
          <Route path = 'nationalAndPatrioticEducation' element = {<Content/>}/>  
          <Route path = 'educationalProjects' element = {<EducationalProjects/>}/>
          <Route path = 'legalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren' element = {<Content/>}/>
          <Route path = 'formationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw' element = {<Content/>}/>
          <Route path = 'counteringBullying' element = {<Content/>}/>
          <Route path = 'rulesOfConductForStudents' element = {<Content/>}/>
          <Route path = 'rightsAndObligationsOfParentsOrPersonsInLocoParentis' element = {<RightsAndObligationsOfParentsOrPersonsInLocoParentis/>}/>
          <Route path = 'recommendationsForRaisingASuccessfulStudent' element = {<RecommendationsForRaisingASuccessfulStudent/>}/>
          <Route path = 'educationalPrograms' element = {<EducationalPrograms/>}/>
          <Route path = 'olympics' element = {<Olympics/>}/>
          <Route path = 'competitions' element = {<Content/>}/>
          <Route path = 'workingWithGiftedStudents' element = {<Content/>}/>
          <Route path = 'ourPride' element = {<Content/>}/>
          <Route path = 'EIT/STA' element = {<Content/>}/>
          <Route path = 'distanceEducation' element = {<Content/>}/>
          <Route path = 'inclusiveEducation' element = {<Content/>}/>
          <Route path = 'workOfThePsychologicalService' element = {<WorkOfThePsychologicalService/>}/>
          <Route path = 'library' element = {<Content/>}/>
        </Routes>
        <div className="NotificationData">
        <h1>Оповіщення</h1>
        <hr></hr>
        {newsList.map((news) => (
          <Notifications key = {news.id} id = {news.id} title={news.title} description={news.description} image = {news.image} />
        ))}
      </div>
      <Information />
      </div>
    </div>
  );
}

export default App;
