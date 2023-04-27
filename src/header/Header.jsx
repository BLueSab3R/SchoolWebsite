import style from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.photo} width={30} height={30} src='/images/logo.png' alt='log' />
                <div className={style.name}>
                    <h1 className={style.text}>
                        Шпитьківський академічний ліцей «Скіф»
                    </h1>
                    <h1 className={style.text}>
                        Дмитрівської сільської ради
                    </h1>
                    <h1 className={style.text}>
                        Бучанського району
                    </h1>
                    <h1 className={style.text}>
                        Київської області
                    </h1>
                </div>

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
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Освітня діяльність</button> </Link>
                        <div className="dropdown-content">
                            <Link to='nus'>Нова українська школа</Link>
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
                        <button className="dropbtn">Методична робота</button>
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
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Початкова школа 1 - 4 класи</button> </Link>
                        <div className="dropdown-content">
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Позашкілля</button> </Link>
                        <div className="dropdown-content">
                            <Link to='clubsAndSections'>Гуртки та секції</Link>

                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Харчування</button> </Link>
                        <div className="dropdown-content">
                        </div>
                    </div>
                    <div className='dropdown'>
                        <Link to='workOfThePsychologicalService'> <button className="dropbtn">Робота соціально-психологічної служби</button> </Link>
                    </div>
                    <div className='dropdown'>
                        <button className="dropbtn">Бібліотека</button>
                        <div className="dropdown-content">
                            <Link to=''>Наші бібліотекарі</Link>
                            <Link to=''>Електронні підручники</Link>
                        </div>
                    </div>
                    <div className='schedule'>
                        <Link to='schedule'> <button className="dropbtn">Єдина школа</button> </Link>
                    </div>
                </li>
            </ul>
        </div >
    )
}
export default Header;