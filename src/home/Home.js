import { useState } from 'react';
import style from './Home.module.scss'
import { newsList } from './NotificationData';
import Notifications from './Notifications';
import Pagination from './Pagination';
function Home() {
    const [newsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const lastNewsIndex = currentPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage;
    const currentNews = newsList.slice(firstNewsIndex, lastNewsIndex);

    const paginate = pageNumber => setCurrentPage(pageNumber);
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
            <div className={style.styles}>
                <div className={style.notificationData}>
                    <h1>Оповіщення</h1>
                    <div className={style.notificationDetails}>
                        {currentNews.map((news) => (
                            <Notifications key={news.id} id={news.id} title={news.title} description={news.description} image={news.image} />
                        ))}
                    </div>
                </div>
                <div className={style.pagination}>
                    <Pagination 
                    newsPerPage = {newsPerPage}
                    totalNews = {newsList.length}
                    paginate = {paginate}
                    />
                </div>
            </div>
        </div>)
}

export default Home;