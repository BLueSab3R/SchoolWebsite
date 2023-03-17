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
                    <div class="dropdown">
                        <Link to='/'> <button class="dropbtn">Головна</button> </Link>
                        <div class="dropdown-content">
                            <Link to='schoolHistory'>Історія школи</Link>
                            <Link to='pedagogichiyColectiv'>Педагогічний колектив</Link>
                            <Link to='lyceumTarget'>Місія ліцею</Link>
                            <Link to='schoolGoal'>Мета</Link>
                            <Link to='visionary'>Візія</Link>
                            <Link to='traditions'>Наші традиції</Link>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    )
}
export default Header;