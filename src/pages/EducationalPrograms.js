import React from 'react'
import { useState } from 'react'
import style from './StylesForPages.module.scss'

const EducationalPrograms = () => {
    const [file1, setFile1] = useState(false);
    const [file2, setFile2] = useState(false);
    const [file3, setFile3] = useState(false);
    const [file4, setFile4] = useState(false);
    const [file5, setFile5] = useState(false);

    return (
        <div>
            <p onClick={() => setFile1(!file1)} className={style.links}>Освітня програма 10 клас.docx</p>
            {file1 &&
                <iframe src="https://drive.google.com/file/d/1pRQv-K19gOo2B2EiZv4Wpl5cHEHbrYPc/preview" width="100%" height="600" />}
            <p onClick={() => setFile2(!file2)} className={style.links}> Освітня програма 11 клас.docx </p>
            {file2 &&
                <iframe src="https://drive.google.com/file/d/1yyrQLvEfLHO1HdH5Q0ppd2NXmwg3-QBV/preview" width="100%" height="600" />}
            <p onClick={() => setFile3(!file3)} className={style.links}>Освітня програма 5 - 9 класи.docx</p>
            {file3 &&
                <iframe src="https://drive.google.com/file/d/1B8jX6zlSLe3SrmKdqcuHCkQarxmb1p1u/preview" width="100%" height="600" />}
            <p onClick={() => setFile4(!file4)} className={style.links}>Освітня_програма_Шпитьківська_ЗОШ_1_клас.pdf</p>
            {file4 &&
                <iframe src="https://drive.google.com/file/d/1LOYze6q4WrevMQEDrG2S_W0Gzut5kLB0/preview" width="100%" height="600" />}
            <p onClick={() => setFile5(!file5)} className={style.links}> Освітня_програма_Шпитьківської_ЗОШ_2-4_клас.pdf</p>
            {file5 &&
                <iframe src="https://drive.google.com/file/d/1uFn6zPDOhfHpPLKCvsBxoighQDjUqHqL/preview" width="100%" height="600" />}
        </div>
    )
}

export default EducationalPrograms
