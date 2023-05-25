import React from 'react'
import style from './StylesForPages.module.scss'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>
            <div className={style.links} to=''><a target='_blank' href='http://www.shpytky-school.edukit.kiev.ua/Files/downloads/%D0%A0%D0%BE%D0%B7%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BF%D1%80%D0%BE%20%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8E%20%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B3%D0%BE%D0%B2%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F.pdf'>Ліцензія на впровадження освітноьї діяльності</a></div>
            <Link className={style.links} to='administration'><h3>Структура та органи управління закладу освіти;</h3></Link>
            <Link className={style.links} to=''><h3>Освітні програми, що реалізуються в закладі освіти та перелік освітніх компонентів,що передбачені відповідною освітньою програмою</h3></Link>
            <Link className={style.links} to=''><h3>Територія обслуговування,закріплена за закладом освіти його засновником</h3></Link>
            <Link className={style.links} to=''><h3>Ліцензований обсяг та фактична кількість осіб,які навчаються у закладі освіти</h3></Link>
            <Link className={style.links} to='language'><h3>Мова освітнього процесу</h3></Link>
            <Link className={style.links} to=''><h3>Наявність вакантних посад,порядок і умови проведення конкурсу на їх заміщення(у разі його проведення)</h3></Link>
            <Link className={style.links} to=''><h3>Матеріально-технічне забезнечення закладу загальної середньої освіти(згідно з ліцензійними умовами)</h3></Link>
        </div>
    )
}

export default Content
