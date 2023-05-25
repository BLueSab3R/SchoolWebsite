import { Link } from 'react-router-dom'
import FontSizeToggle from './FontSizeToggle';
import style from './Header.module.scss'

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
                        Бучанського району
                        Київської області
                    </h1>
                </div>
            </div>
            <ul>
                <li>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">ГОЛОВНА</button> </Link>
                        <div className="dropdown-content">
                            <Link to='schoolHistory'>ІСТОРІЯ</Link>
                            <Link to='administration'>АДМІНІСТРАЦІЯ</Link>
                            <Link to='teachingstaff'>ПЕДАГОГІЧНИЙ КОЛЕКТИВ</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ІНФОРМАЦІЙНА ВІДКРИТІСТЬ ТА ПРОЗОРІСТЬ</button>
                        <div className="dropdown-content">
                            <Link to='assessmentOfStudents'>ОЦІНЮВАННЯ ЗДОБУВАЧІВ ОСВІТИ</Link>
                            <Link to='rulesFordAmission'>ПРАВИЛА ПРИЙОМУ ДО ПЕРШОГО КЛАСУ</Link>
                            <Link to='studentsRule'>ПРАВА І ОБОВ'ЯЗКИ УЧНІВ</Link>
                            <Link to='personalDataProtection'>ЗАХИСТ ПЕРСОНАЛЬНИХ ДАНИХ</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">ОСВІТНЯ ДІЯЛЬНІСТЬ</button> </Link>
                        <div className="dropdown-content">
                            <Link to='nus'>НОВА УКРАЇНСЬКА ШКОЛА</Link>
                            <Link to='educationalPrograms'>ОСВІТНІ ПРОГРАМИ</Link>
                            <Link to='methodologicalAssociations'>МЕТОДИЧНІ ОБ'ЄДНАННЯ</Link>
                            <Link to='EIT/STA'>ЗНО/ДПА</Link>
                            <Link to='distanceEducation'>ДИСТАНЦІЙНЕ НАВЧАННЯ</Link>
                            <Link to='inclusiveEducation'>ІНКЛЮЗИВНЕ НАВЧАННЯ</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">БЕЗПЕЧНЕ ОСВІТНЄ СЕРЕДОВИЩЕ</button>
                        <div className="dropdown-content">
                            <Link to='protectionOfChildrensRights'>ОХОРОНА ПРАВ ДИТИНИ</Link>
                            <Link to='preventionOfInjuriesDuringTheEducationalProcess'>ПРОФІЛАКТИКА І ПОПЕРЕДЖЕННЯ ТРАВМАТИЗМУ ПІД ЧАС ОСВІТНЬОГО ПРОЦЕСУ</Link>
                            <Link to='complianceWithInternalRegulations'>ДОТРИМАННЯ ПРАВИЛ ВНУТРІШНЬОГО РОЗПОРЯДКУ</Link>
                            <Link to='rulesOfBehaviorDuringTheHolidays'>ПРАВИЛА ПОВЕДІНКИ ПІД ЧАС КАНІКУЛ</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ВИХОВНА РОБОТА</button>
                        <div className="dropdown-content">
                            <Link to='studentSelf-government'>УЧНІВСЬКЕ САМОВРЯДУВАННЯ</Link>
                            <Link to='nationalAndPatrioticEducation'>НАЦІОНАЛЬНО-ПАТРІОТИЧНЕ ВИХОВАННЯ</Link>
                            <Link to='educationalProjects'>ВИХОВНІ ПРОЕКТИ</Link>
                            <Link to='legalEducationAndPreventionOfBadHabitsAndDeviantBehaviorOfChildren'>ПРАВОВЕ ВИХОВАННЯ ТА ПРОФІЛАКТИКА ШКІДЛИВИХ ЗВИЧОК
                                ТА ДЕВІАНТНОЇ ПОВЕДІНКИ ЗД.ОС
                            </Link>
                            <Link to='formationOfBehaviorOfCorrectSecurityActionsInConditionsOfMartialLaw'>ФОРМУВАННЯ ПОВЕДІНКИ ПРАВИЛЬНИХ БЕЗПЕКОВИХ ДІЙ В УМОВАХ
                                ВОЄННОГО СТАНУ
                            </Link>
                            <Link to='counteringBullying'>ПРОТИДІЯ БУЛІНГУ</Link>
                            <Link to='rulesOfConductForStudents'>ПРАВИЛА ПОВЕДІНКИ ЗДОБУВАЧІВ ОСВІТИ</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">ДЛЯ БАТЬКІВ</button>
                        <div className="dropdown-content">
                            <Link to='rightsAndObligationsOfParentsOrPersonsInLocoParentis'>ПРАВА ТА ОБОВ'ЯЗКТ БАТЬКІВ, АБО ОСІБ, ЩО ЇХ ЗАМІНЯЮТЬ</Link>
                            <Link to='recommendationsForRaisingASuccessfulStudent'>РЕКОМЕНДАЦІЇ ЩОДО ВИХОВАННЯ УСПІШНОГО ШКОЛЯРА</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">МЕТОДИЧНА РОБОТА</button>
                        <div className="dropdown-content">
                            <Link to='educationalProjects'>ОСВІТНІ ПРОЕКТИ - 'ЄДИНА ШКОЛА'</Link>
                            <Link to='competitions'>КОНКУРСИ</Link>
                            <Link to='workingWithGiftedStudents'>РОБОТА З ОБДАРОВАНИМИ УЧНЯМИ</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                         <button className="dropbtn">ПОЗАШКІЛЛЯ</button> 
                        <div className="dropdown-content">
                            <Link to='clubsAndSections'>ГУРТКИ ТА СЕКЦІЇ</Link>

                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='nutrition'> <button className="dropbtn">ХАРЧУВАННЯ</button> </Link>
                    </div>
                    <div className='dropdown'>
                        <Link to='workOfThePsychologicalService'> <button className="dropbtn">РОБОТА СОІЦІАЛЬНО-ПСИХОЛОГІЧНОЇ СЛУЖБИ</button> </Link>
                    </div>
                    <div className='schedule'>
                        <Link to='schedule'> <button className="dropbtn">РОЗКЛАД</button> </Link>
                    </div>
                    <FontSizeToggle />
                </li>
            </ul>
        </div >
    )
}
export default Header;