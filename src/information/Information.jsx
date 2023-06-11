import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import styles from './Information.module.scss'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function Information() {
    return (
        <div className={styles.information}>
            <div className={styles.wrapper}>
                <div className={styles.links}>
                    <p>Корисні посилання</p>
                    <a className={styles.link} href='www.mon.gov.ua/'>Міністерство освіти і науки</a>
                    <a className={styles.link} href='http://testportal.gov.ua/'>Український центр оцінювання якості освіти</a>
                    <a className={styles.link} href='https://lms.e-school.net.ua/'>Всеукраїнська школа онлайн</a>
                    <a className={styles.link} href='http://kristti.com.ua/'>Київський обласний інститут підвищення освіти педагогічних кадрів</a>
                </div>
                <div className={styles.content}>
                    <Link className={styles.links} to='content'><h4>ЗМІСТ САЙТУ</h4></Link>
                </div>
                <div className={styles.social}>
                    <a href='https://www.facebook.com/profile.php?id=100075877736036'
                        className='FaceBook social'
                    >
                       
                    </a>
                </div>
            </div >
        </div>
    )
}
export default Information;