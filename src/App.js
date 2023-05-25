import Header from './header/Header';
import Home from './home/Home';
import './index.scss';
import { Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import SchoolHistory from './pages/SchoolHistory';
import TeachingStaff from './pages/TeachingStaff';
import LyceumTarget from './pages/LyceumTarget';
import Visionary from './pages/Visionary';
import SchoolGoal from './pages/SchoolGoal';
import Information from './information/Information';
import AssessmentOfStudents from './pages/AssessmentOfStudents';
import RulesFordAmission from './pages/RulesFordAmission';
import NotificationsElem from './home/NotificationsElem';
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
import Nus from './pages/Nus';
import Administration from './pages/Administration';
import Nutrition from './pages/Nutrition';
import EAIDPA from './pages/EAIDPA';
import RulesOfConductForStudents from './pages/rulesOfConductForStudents'
import CounteringBullying from './pages/counteringBullying';
import WorkingWithGiftedStudents from './pages/workingWithGiftedStudents';
import ClubsAndSections from './pages/clubsAndSections';
import InclusiveEducation from './pages/inclusiveEducation';
import DistanceEducation from './pages/distanceEducation';
import FormationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw from './pages/formationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw';
import LegalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren from './pages/legalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren';
import NationalAndPatrioticEducation from './pages/nationalAndPatrioticEducation';
import StudentSelfGovernment from './pages/studentSelf-government';
import RulesOfBehaviorDuringTheHolidays from './pages/rulesOfBehaviorDuringTheHolidays';
import ComplianceWithInternalRegulations from './pages/complianceWithInternalRegulations';
import PreventionOfInjuriesDuringTheEducationalProcess from './pages/preventionOfInjuriesDuringTheEducationalProcess';
import ProtectionOfChildrensRights from './pages/protectionOfChildrensRights';
import Competitions from './pages/competitions';
import MethodologicalAssociations from './pages/methodologicalAssociations';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])
  return (
    <div className='app'>
      {!loading &&
        <div className='content'>
          <div className='wrapper clear'>
            <Header />
            <div className='app-wrapper-content'>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/' element={<Information />} />
                <Route path='SchoolWebsite' element={<Home />} />
                <Route path='schoolhistory' element={<SchoolHistory />} />
                <Route path='teachingstaff' element={<TeachingStaff />} />
                <Route path='lyceumTarget' element={<LyceumTarget />} />
                <Route path='visionary' element={<Visionary />} />
                <Route path='schoolGoal' element={<SchoolGoal />} />
                <Route path='assessmentOfStudents' element={<AssessmentOfStudents />} />
                <Route path='rulesFordAmission' element={<RulesFordAmission />} />
                <Route path='notification/:id' element={<NotificationsElem />} />
                <Route path='schedule' element={<Schedule />} />
                <Route path='studentsRule' element={<StudentsRule />} />
                <Route path='traditions' element={<Traditions />} />
                <Route path='personalDataProtection' element={<PersonalDataProtection />} />
                <Route path='statute' element={<Statut />} />
                <Route path='content' element={<Content />} />
                <Route path='clubsAndSections' element={<ClubsAndSections />} />
                <Route path='protectionOfChildrensRights' element={<ProtectionOfChildrensRights />} />
                <Route path='preventionOfInjuriesDuringTheEducationalProcess' element={<PreventionOfInjuriesDuringTheEducationalProcess />} />
                <Route path='complianceWithInternalRegulations' element={<ComplianceWithInternalRegulations />} />
                <Route path='rulesOfBehaviorDuringTheHolidays' element={<RulesOfBehaviorDuringTheHolidays />} />
                <Route path='studentSelf-government' element={<StudentSelfGovernment />} />
                <Route path='nationalAndPatrioticEducation' element={<NationalAndPatrioticEducation />} />
                <Route path='educationalProjects' element={<EducationalProjects />} />
                <Route path='legalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren' element={<LegalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren />} />
                <Route path='formationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw' element={<FormationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw />} />
                <Route path='counteringBullying' element={<CounteringBullying />} />
                <Route path='rulesOfConductForStudents' element={<RulesOfConductForStudents />} />
                <Route path='rightsAndObligationsOfParentsOrPersonsInLocoParentis' element={<RightsAndObligationsOfParentsOrPersonsInLocoParentis />} />
                <Route path='recommendationsForRaisingASuccessfulStudent' element={<RecommendationsForRaisingASuccessfulStudent />} />
                <Route path='educationalPrograms' element={<EducationalPrograms />} />
                <Route path='olympics' element={<Olympics />} />
                <Route path='competitions' element={<Competitions />} />
                <Route path='workingWithGiftedStudents' element={<WorkingWithGiftedStudents />} />
                <Route path='EIT/STA' element={<EAIDPA/>} />
                <Route path='distanceEducation' element={<DistanceEducation />} />
                <Route path='inclusiveEducation' element={<InclusiveEducation />} />
                <Route path='workOfThePsychologicalService' element={<WorkOfThePsychologicalService />} />
                <Route path='nus' element={<Nus />} />
                <Route path='administration' element={<Administration />} />
                <Route path ='nutrition' element = {<Nutrition/>} />
                <Route path ='methodologicalAssociations'element ={<MethodologicalAssociations />} />
                {/* <Route path = 'license' element = {}/> */}
              </Routes>
            </div>
            <Information />
          </div>
        </div>

      }
    </div>

  );
}

export default App;
