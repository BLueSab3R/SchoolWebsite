import style from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img className={style.photo} width={80} height={90} src='/images/logo-removebg-preview.png' alt='log' />
                <h1 className={style.text}>
                    Сайт школи 'Скіф'
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
                        <Link to='/'> <button className="dropbtn">Інформаційна відкритість та прозорість</button> </Link>
                        <div className="dropdown-content">
                            <Link to='assessmentOfStudents'>Оцінювання здобувачів освіти</Link>
                            <Link to='rulesFordAmission'>Правила прийому до першого класу</Link>
                            <Link to='studentsRule'>Права і обов'язки учнів</Link>
                            <Link to='personalDataProtection'>Захист персональних даних</Link>
                            <Link to=''>Гуртки та секції</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Безпечне оствітнє середовище</button> </Link>
                        <div className="dropdown-content">
                            <Link to=''>Охорона прав дитини</Link>
                            <Link to=''>Профілактика і попередження травматизму під час освітнього процесу</Link>
                            <Link to=''>Дотримання правил внутрішнього розпорядку</Link>
                            <Link to=''>Харчування</Link>
                            <Link to=''>Правила поведінки під час канікул</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Виховна робота</button> </Link>
                        <div className="dropdown-content">
                            <Link to=''>Учнівське самоврядування</Link>
                            <Link to=''>Національно-патріотичне виховання</Link>
                            <Link to=''>Виховні проекти</Link>
                            <Link to=''>Правила поведінки під час канікул</Link>
                            <Link to=''>Правове виховання та профілактика шкідливих звичок
                            та девіантної поведінки зд.ос
                            </Link>
                            <Link to=''>Формування поведінки правильних безпекових дій в умовах
                            воєнного стану 
                             </Link>
                            <Link to=''>Протидія булінгу</Link>
                            <Link to=''>Правила поведінки здобувачів освіти</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Для батьків</button> </Link>
                        <div className="dropdown-content">
                            <Link to=''>Учнівське самоврядування</Link>
                            <Link to=''>Національно-патріотичне виховання</Link>
                            <Link to=''>Виховні проекти</Link>
                            <Link to=''>Правила поведінки під час канікул</Link>
                            <Link to=''>Правове виховання та профілактика шкідливих звичок
                            та девіантної поведінки зд.ос
                            </Link>
                            <Link to=''>Формування поведінки правильних безпекових дій в умовах
                            воєнного стану 
                             </Link>
                            <Link to=''>Протидія булінгу</Link>
                            <Link to=''>Правила поведінки здобувачів освіти</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <Link to='/'> <button className="dropbtn">Навчально-методична робота</button> </Link>
                        <div className="dropdown-content">
                            <Link to=''>Освітні програми</Link>
                            <Link to=''>Освітні проекти - 'Єдина школа'</Link>
                            <Link to=''>Олімпіади</Link>
                            <Link to=''>Конкурси</Link>
                            <Link to=''>Робота з обдарованими учнями</Link>
                            <Link to=''>Наша гордість</Link>
                            <Link to=''>Методичні об'єднання</Link>
                            <Link to=''>ЗНО/ДПА</Link>
                            <Link to=''>Дистанційне навчання</Link>
                            <Link to=''>Інклюзивне навчання</Link>
                        </div>
                    </div>
                    <div className='schedule'>
                        <Link to='schedule'> <button className="dropbtn">Робота психологічної служби</button> </Link>
                    </div>
                    <div className='schedule'>
                        <Link to='schedule'> <button className="dropbtn">Бібліотека</button> </Link>
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