import React from 'react'
import style from './StylesForPages.module.scss'
import { Link } from 'react-router-dom'

const Content = () => {
    return (
        <div>
            <Link className={style.links} to=''><h3>ліцензії на провадження освітньої діяльності;</h3></Link>
            <Link className={style.links} to=''><h3>Ліцензія на впровадження освітноьї діяльності</h3></Link>
            <Link className={style.links} to=''><h3>структура та органи управління закладу освіти;</h3></Link>
            <Link className={style.links} to=''><h3>Освітні програми, що реалізуються в закладі освіти та перелік освітніх компонентів,що передбачені відповідною освітньою програмою</h3></Link>
            <Link className={style.links} to=''><h3>Територія обслуговування,закріплена за закладом освіти його засновником</h3></Link>
            <Link className={style.links} to=''><h3>Ліцензований обсяг та фактична кількість осіб,які навчаються у закладі освіти</h3></Link>
            <Link className={style.links} to=''><h3>Мова освітнього процесу</h3></Link>
            <Link className={style.links} to=''><h3>Наявність вакантних посад,порядок і умови проведення конкурсу на їх заміщення(у разі його проведення)</h3></Link>
            <Link className={style.links} to=''><h3>Матеріально-технічне забезнечення закладу загальної середньої освіти(згідно з ліцензійними умовами)</h3></Link>
        </div>
    )
}

export default Content
