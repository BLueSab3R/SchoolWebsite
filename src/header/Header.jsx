import style from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.photo} width={150} height={190} src='/images/logo-removebg-preview.png' alt='log' />
                <h1 className={style.text}>
                Шпитьківський академічний ліцей «Скіф» Дмитрівської сільської ради Бучанського району Київської області
                </h1>
            </div>
            <ul>
                <li>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Головна</button> </Link>
                        <div className="dropdown-content">
                            <Link to='schoolHistory'>Історія школи</Link>
                            <Link to='teachingstaff'>Педагогічний колектив</Link>
                            <Link to='lyceumTarget'>Місія ліцею</Link>
                            <Link to='schoolGoal'>Мета</Link>
                            <Link to='visionary'>Візія</Link>
                            <Link to='traditions'>Наші традиції</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Інформаційна відкритість та прозорість</button>
                        <div className="dropdown-content">
                            <Link to='assessmentOfStudents'>Оцінювання здобувачів освіти</Link>
                            <Link to='rulesFordAmission'>Правила прийому до першого класу</Link>
                            <Link to='studentsRule'>Права і обов'язки учнів</Link>
                            <Link to='personalDataProtection'>Захист персональних даних</Link>
                            <Link to='clubsAndSections'>Гуртки та секції</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                         <button className="dropbtn">Безпечне оствітнє середовище</button> 
                        <div className="dropdown-content">
                            <Link to='protectionOfChildrensRights'>Охорона прав дитини</Link>
                            <Link to='preventionOfInjuriesDuringTheEducationalProcess'>Профілактика і попередження травматизму під час освітнього процесу</Link>
                            <Link to='complianceWithInternalRegulations'>Дотримання правил внутрішнього розпорядку</Link>
                            <Link to='food'>Харчування</Link>
                            <Link to='rulesOfBehaviorDuringTheHolidays'>Правила поведінки під час канікул</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Виховна робота</button> 
                        <div className="dropdown-content">
                            <Link to='studentSelf-government'>Учнівське самоврядування</Link>
                            <Link to='nationalAndPatrioticEducation'>Національно-патріотичне виховання</Link>
                            <Link to='educationalProjects'>Виховні проекти</Link>
                            <Link to='legalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren'>Правове виховання та профілактика шкідливих звичок
                                та девіантної поведінки зд.ос
                            </Link>
                            <Link to='formationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw'>Формування поведінки правильних безпекових дій в умовах
                                воєнного стану
                            </Link>
                            <Link to='counteringBullying'>Протидія булінгу</Link>
                            <Link to='rulesOfConductForStudents'>Правила поведінки здобувачів освіти</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Для батьків</button> 
                        <div className="dropdown-content">
                            <Link to='rightsAndObligationsOfParentsOrPersonsInLocoParentis'>Права та обов'язки батьків, або осіб, що їх заміняють</Link>
                            <Link to='recommendationsForRaisingASuccessfulStudent'>Рекомендації щодо виховання успішного школяра</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                         <button className="dropbtn">Навчально-методична робота</button> 
                        <div className="dropdown-content">
                            <Link to='educationalPrograms'>Освітні програми</Link>
                            <Link to='educationalProjects'>Освітні проекти - 'Єдина школа'</Link>
                            <Link to='olympics'>Олімпіади</Link>
                            <Link to='competitions'>Конкурси</Link>
                            <Link to='workingWithGiftedStudents'>Робота з обдарованими учнями</Link>
                            <Link to='ourPride'>Наша гордість</Link>
                            <Link to='methodologicalAssociations'>Методичні об'єднання</Link>
                            <Link to='EIT/STA'>ЗНО/ДПА</Link>
                            <Link to='distanceEducation'>Дистанційне навчання</Link>
                            <Link to='inclusiveEducation'>Інклюзивне навчання</Link>
                        </div>
                    </div>
                    <div className='schedule'>
                        <Link to='workOfThePsychologicalService'> <button className="dropbtn">Робота психологічної служби</button> </Link>
                    </div>
                    <div className='schedule'>
                        <Link to='library'> <button className="dropbtn">Бібліотека</button> </Link>
                    </div>
                    <div className='schedule'>
                        <Link to='schedule'> <button className="dropbtn">Розклад</button> </Link>
                    </div>
                </li>
            </ul>
        </div >
    )
}
export default Header;