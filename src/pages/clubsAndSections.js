import React from 'react'
import style from './StylesForPages.module.scss'

const ClubsAndSections = () => {
    return (
        <div lassName={style.styles}>
            <ul>
                <li>Музичні гуртки: Учні можуть приєднатися до музичних гуртків, таких як хор, оркестр, ансамбль або гурт музичних інструментів. Вони мають можливість вивчати музику, виконувати концерти та брати участь у шкільних заходах.</li>
                <li>Художні гуртки: Учні, які цікавляться малюванням, живописом, скульптурою та іншими видами мистецтва, можуть долучитися до художніх гуртків. Вони отримають можливість розвивати свої творчі навички та виставляти свої роботи на шкільних виставках.</li>
                <li>Спортивні секції: Шпитківський ліцей пропонує різноманітні спортивні секції, такі як футбол, баскетбол, волейбол, легка атлетика та інші. Учні можуть займатися спортом, покращувати свої фізичні здібності, брати участь у змаганнях та представляти школу.</li>
                <li>Інтелектуальні гуртки: Для учнів, які зацікавлені у розвитку своєї інтелектуальної сфери, шпитківський ліцей пропонує інтелектуальні гуртки, такі як гурток математики, гурток робототехніки, гурток комп'ютерних наук та інші. Вони можуть брати участь у конкурсах, олімпіадах та інших інтелектуальних заходах.</li>
            </ul>
        </div>
    )
}

export default ClubsAndSections