import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { newsList } from './NotificationData';
import style from './Notifications.module.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function NotificationsElem() {

    const Params = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    const notification = (newsList[Params.id - 1]);
    const goToPrevious = (event) => {
        event.stopPropagation();
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? notification.image.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = (event) => {
        event.stopPropagation();
        const isLastSlide = currentIndex === notification.image.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className={style.notificationData}>
            <h1>{notification.title}</h1>
            <div className={style.imgList}>
                <FaArrowLeft onClick={goToPrevious} className={style.leftIcon} />
                <img
                    className={style.img}
                    width={150}
                    height={190}
                    src={notification.image[currentIndex]}
                    alt={`Image 0`}
                />
                <FaArrowRight onClick={goToNext} className={style.rightIcon} />

            </div>
            <h2>{notification.content}</h2>
        </div>


    )
}

export default NotificationsElem