import React from 'react'
import style from './StylesForPages.module.scss'

const Nus = () => {
    return (
        <div>
            <div className={style.nusWrapper}>
                <div className={style.text}>
                    <h3>НОВА УКРАЇНСЬКА ШКОЛА</h3>
                    <p>
                        Нова українська школа – це ключова реформа Міністерства освіти і науки. Головна мета – створити школу, в якій буде приємно навчатись і яка даватиме учням не тільки знання, як це відбувається зараз, а й уміння застосовувати їх у повсякденному житті.
                        НУШ – це школа, до якої приємно ходити учням. Тут прислухаються до їхньої думки, вчать критично мислити, не боятись висловлювати власну думку та бути відповідальними громадянами. Водночас батькам теж подобається відвідувати цю школу, адже тут панують співпраця та взаєморозуміння.
                    </p>
                    <div className={style.components}>
                        <h3>
                            Головні Компоненти
                            <div className={style.line} />
                        </h3>
                        <ul>
                            <li>1.Новий зміст освіти, заснований на формуванні компетентностей, потрібних
                                для успішної самореалізації в суспільстві</li>
                            <li>2.Умотивований учитель, який має
                                свободу творчості й розвивається
                                професійно.</li>
                            <li>3.Наскрізний процес виховання,
                                який формує цінності.</li>
                            <li>4.Децентралізація та ефективне
                                управління, що надасть школі
                                реальну автономію.</li>
                            <li>5.Педагогіка, що ґрунтується на партнерстві між учнем, учителем і батьками.</li>
                            <li>6.Орієнтація на потреби
                                учня в освітньому процесі,
                                дитиноцентризм.</li>
                            <li>7.Нова структура школи, яка дає змогу
                                добре засвоїти новий зміст і набути
                                компетентності для життя.</li>
                            <li>8.Справедливий розподіл публічних
                                коштів, який забезпечує рівний
                                доступ усіх дітей до якісної освіти.</li>
                            <li>9.Сучасне освітнє середовище, яке
                                забезпечить необхідні умови, засоби і
                                технології для навчання учнів, освітян,
                                батьків не лише в приміщенні
                                навчального закладу</li>
                        </ul>
                    </div>

                </div>
                <div className={style.link}>
                    <img className={style.photo} src='/images/nushLogo.jpg' alt='log' />
                    <h3>Посилання</h3>
                    <a
                        href='https://mon.gov.ua/storage/app/media/zagalna%20serednya/nova-ukrainska-shkola-compressed.pdf'
                        target='_blank'
                    >
                        Концепції Нової української школи
                    </a>
                    <a
                        href='https://mon.gov.ua/storage/app/media/zagalna%20serednya/programy-1-4-klas/2022/08/15/Typova.osvitnya.prohrama.1-4/Typova.osvitnya.prohrama.1-2.Savchenko.pdf'
                        target='_blank'
                    >
                        Типова освітня програма,
                        розроблена під керівництвом Савченко О. Я.

                    </a>
                    <a
                        href='https://imzo.gov.ua/2021/07/15/nakaz-mon-vid-13-07-2021-813-pro-zatverdzhennia-metodychnykh-rekomendatsiy-shchodo-otsiniuvannia-rezul-tativ-navchannia-uchniv-1-4-klasiv-zakladiv-zahal-noi-seredn-oi-osvity/'
                        target='_blank'
                    >
                        Наказ
                    </a>
                    <a
                        href='https://mon.gov.ua/storage/app/media/zagalna%20serednya/programy-1-4-klas/2022/08/15/Typova.osvitnya.prohrama.1-4/Typova.osvitnya.prohrama.3-4.Savchenko.pdf'
                        target='_blank'
                    >
                    Типова освітня програма, розроблена під керівництвом Савченко О. Я. 3-4 клас
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Nus