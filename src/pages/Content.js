import React from 'react'
import style from './StylesForPages.module.scss'
import { useState } from 'react'


const Content = () => {
    const [file1, setFile1] = useState(false);
    const [file2, setFile2] = useState(false);
    const [file3, setFile3] = useState(false);
    const [file4, setFile4] = useState(false);
    const [file5, setFile5] = useState(false);
    const [file6, setFile6] = useState(false);
    const [file7, setFile7] = useState(false);
    return (
        <div className={style.style}>
            <div className={style.links} to=''><a target='_blank' href='http://www.shpytky-school.edukit.kiev.ua/Files/downloads/%D0%A0%D0%BE%D0%B7%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D0%BF%D1%80%D0%BE%20%D1%82%D0%B5%D1%80%D0%B8%D1%82%D0%BE%D1%80%D1%96%D1%8E%20%D0%BE%D0%B1%D1%81%D0%BB%D1%83%D0%B3%D0%BE%D0%B2%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F.pdf'>Ліцензія на впровадження освітноьї діяльності</a></div>
            <p onClick={() => setFile2(!file2)} className={style.links}> Мова освітнього процесу </p>
            {file2 && <h3>Мова, якою відбувається освітній процес в закладі - українська.

                В закладі вивчають англійську, німецьку мови </h3>}

            <p onClick={() => setFile3(!file3)} className={style.links}>Територія обслуговування,закріплена за закладом освіти його засновником</p>
            {
                file3 && <p>До території обслуговування Шпитьківської загальноосвітньої школи І-ІІІ ступенів належать села: Шпитьки, Горбовичі, Лісне, Мрія, Петрушки, Личанка.</p>
            }
            <p onClick={() => setFile4(!file4)} className={style.links}>Ліцензія на впровадження освітноьї діяльності</p>
            {
                file4 &&
                <p>Ліцензування закладу загальної середньої освіти не передбачено.</p>
            }
            <p onClick={() => setFile1(!file1)} className={style.links}> Структура та органи управління закладу освіти</p>
            {
                file1 &&
                <iframe src="https://drive.google.com/file/d/1qYU1EHdgxDyO-MpzjSmlJAk68wNg3SMN/preview" width="100%" height="600" />
            }
            <p onClick={() => setFile5(!file5)} className={style.links}> Ліцензований обсяг та фактична кількість осіб,які навчаються у закладі освіти</p>
            {
                file5 &&
                <iframe src="https://drive.google.com/file/d/1hmkvctFscw2KconxxjgBpXYfo-IxPeGj/preview" width="100%" height="600" />
            }
            <p onClick={() => setFile6(!file5)} className={style.links}> Наявність вакантних посад,порядок і умови проведення конкурсу на їх заміщення(у разі його проведення)</p>
            {
                file5 && <div>
                    <ul>
                        <li>1. Асистент учителя - 1 ставка.
                        </li>
                        <li>2. Прибиральник службових приміщень - 1 ставка.
                        </li>
                        <li>3. Інженер-електронник - 1 ставка.</li>
                    </ul>
                </div>
            }
            <p onClick={() => setFile7(!file5)} className={style.links}> Матеріально-технічне забезнечення закладу загальної середньої освіти(згідно з ліцензійними умовами)</p>
            {
                file5 &&
                <iframe src="https://drive.google.com/file/d/1TnOunteMqM7H_0lysKfWBaZ0FbZpzBOx/preview" width="100%" height="600" />
            }

        </div >
    )
}

export default Content
