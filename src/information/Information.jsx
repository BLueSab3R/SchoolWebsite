import { Link } from 'react-router-dom'
import style from './Information.module.scss'

function Information() {
    return (
        <div className={style.wrapper}>
            <div className={style.block}>
                <div className={style.links}>
                    <p>Корисні посилання</p>
                    <a className={style.link} href='www.mon.gov.ua/'>Міністерство освіти і науки</a>
                    <a className={style.link} href='http://testportal.gov.ua/'>Український центр оцінювання якості освіти</a>
                    <a className={style.link} href='https://lms.e-school.net.ua/'>Всеукраїнська школа онлайн</a>
                    <a className={style.link} href='http://kristti.com.ua/'>Київський обласний інститут підвищення освіти педагогічних кадрів</a>
                </div>
            </div>
            <div className={style.content}>
                <Link className={style.links} to='content'><h4>Зміст сайту</h4></Link>
            </div>
            <h4 className={style.number}>
                Телефон: 0459876593
            </h4>
        </div >


    )
}
export default Information;