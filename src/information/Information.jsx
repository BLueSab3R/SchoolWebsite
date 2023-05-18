//  import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import style from './Information.module.scss'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Information() {
    return (
        <div className={style.wrapper}>
            <div className={style.links}>
                <p>Корисні посилання</p>
                <a className={style.link} href='www.mon.gov.ua/'>Міністерство освіти і науки</a>
                <a className={style.link} href='http://testportal.gov.ua/'>Український центр оцінювання якості освіти</a>
                <a className={style.link} href='https://lms.e-school.net.ua/'>Всеукраїнська школа онлайн</a>
                <a className={style.link} href='http://kristti.com.ua/'>Київський обласний інститут підвищення освіти педагогічних кадрів</a>
            </div>
            <div className={style.content}>
                <Link className={style.links} to='content'><h4>ЗМІСТ САЙТУ</h4></Link>
            </div>
            <div className={style.social}>
                <a href='https://www.facebook.com/profile.php?id=100075877736036'
                    className='FaceBook social'
                >
                    <FontAwesomeIcon icon={faFacebook}
                        size='5x'
                    />
                </a>
            </div>
        </div >


    )
}
export default Information;