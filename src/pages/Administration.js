import React, { useEffect, useState } from 'react';
import style from './StylesForPages.module.scss';

const Administration = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            handleNextCard();
        } else {
            handlePreviousCard();
        }
    };

    const handleNextCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % admnistration.length);
    };

    const handlePreviousCard = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + admnistration.length) % admnistration.length);
    };

    useEffect(() => {
        const container = document.querySelector(`.${style.admnistration}`);
        container.addEventListener('wheel', handleWheel);
        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const admnistration = [
        {
            name: 'Штифурко Анеліна Василівна',
            src: 'teachers/23.jpg',
        },
        {
            name: 'Данилюк Олександра Михайлівна',
            src: 'teachers/2.jpg',
        },
        {
            name: 'Грищенко Олена Іванівна',
            src: 'teachers/5.jpg',
        },
    ];

    const current = admnistration[currentIndex];

    return (
        <div className={style.admnistration}>
            <div className={style.admnistrationColumn}>
                {admnistration.map((admin) => (
                    <div key={admin.name} className={style.admnistrationCard}>
                        <div className={style.description}>
                            {admin.name === 'Штифурко Анеліна Василівна' && (
                                <p>
                                    {`${admin.name.split(' ')[0]}`}
                                    <br />
                                    {`${admin.name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель початкових класів, спеціаліст І категорії
                                    </span>
                                </p>
                            )}
                            {admin.name === 'Данилюк Олександра Михайлівна' && (
                                <p>
                                    {`${admin.name.split(' ')[0]}`}
                                    <br />
                                    {`${admin.name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель математики,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                            {admin.name === 'Грищенко Олена Іванівна' && (
                                <p>
                                    {`${admin.name.split(' ')[0]}`}
                                    <br />
                                    {`${admin.name.split(' ').slice(1).join(' ')}`}
                                    <br />
                                    <span>
                                        заступник директора з навчально-виховної роботи,
                                        вчитель географії,
                                        спеціаліст вищої категорії, учитель-методист
                                    </span>
                                </p>
                            )}
                        </div>
                        <img src={`${process.env.PUBLIC_URL}${admin.src}`} alt={admin.name} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Administration;
