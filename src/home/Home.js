import { useState } from 'react';
import style from './Home.module.scss'
import { newsList } from './NotificationData';
import Notifications from './Notifications';
import Pagination from './Pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

function Home() {
  const [newsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const currentNews = newsList.slice(firstNewsIndex, lastNewsIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className={style.styles}>
      <div className={style.notificationData}>
        <h3>Оповіщення</h3>
        <div className={style.notificationDetails}>
          {currentNews.map((news) => (
            <Notifications key={news.id} id={news.id} title={news.title} description={news.description} image={news.image} />
          ))}
        </div>
      </div>
      <div className={style.pagination}>
        <Pagination
          newsPerPage={newsPerPage}
          totalNews={newsList.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default Home;
