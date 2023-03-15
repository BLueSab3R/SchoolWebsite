import style from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={style.header}>
            <div className={style.title}>
                <img width={70} height={70} src='/images/logo-removebg-preview.png' alt='log' />
                <h1>
                    САЙТ ШПИТЬКІВСЬКОЇ ЗАГАЛЬНООСВІТНЬОЇ ШКОЛИ І-ІІІ СТУПЕНІВ
                    КИЇВСЬКОЇ ОБЛАСТІ БУЧАНСЬКОГО РАЙОНУ ДМИТРІВСЬКОЇ СІЛЬСЬКОЇ РАДИ
                </h1>
            </div>
            <div className={style.fastMenu}>
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
            </div>
        </div >
    )
}
export default Header;