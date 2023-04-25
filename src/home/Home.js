import style from './Home.module.scss'
import { newsList } from './NotificationData';
import Notifications from './Notifications.js'
function Home() {
    return (
        <div className={style.styles}>
            <p>Доброго дня, шановні відвідувачі нашого сайту!</p>
            <p>Ми дуже хочемо, щоб Ви ближче познайомилися з нашою школою, і щоб це знайомство було корисним, цікавим та приємним.</p>

            <div>
                <p className={style.abzac}>Школо!</p>
                <p>Ми тобі присягаємо на вірність,</p>
                <p>Честь твою збережемо на дорогах життя.</p>
                <p>Із порога твого починається вічність,</p>
                <p>Починається наше ясне майбуття.</p>
                <p>Хай проходять роки, і зростають нові покоління,</p>
                <p>Ми клянемося завжди уроки всі свої пам'ятать.</p>
                <p>І здобуті знання, і сердець наших юних горіння</p>
                <p>Україні своїй обіцяєм до краплі віддать!</p>
            </div>
            <div className="NotificationData">
                <h1>Оповіщення</h1>
                <hr></hr>
                {newsList.map((news) => (
                    <Notifications key={news.id} id={news.id} title={news.title} description={news.description} image={news.image} />
                ))}
            </div>
        </div>
    )
}

export default Home;