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
                            <Link to=''>Права і обов'язки учнів</Link>
                            <Link to=''>Захист персональних даних</Link>
                            <Link to=''>Гуртки та секції</Link>
                        </div>
                    </div>

                </li>
            </ul>
        </div >
    )
}
export default Header;