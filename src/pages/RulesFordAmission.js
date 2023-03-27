import React from 'react'
import { useState } from 'react'
import style from './StylesForPages.module.scss'

function RulesFordAmission() {
  const [file1, setFile1] = useState(false);
  const [file2, setFile2] = useState(false);
  const [file3, setFile3] = useState(false);
  const [file4, setFile4] = useState(false);
  const [file5, setFile5] = useState(false);
  const [file6, setFile6] = useState(false);
  const [file7, setFile7] = useState(false);


  return (
    <div>
      <p onClick={() => setFile1(!file1)} className={style.links}>Наказ МОН України № 367 від 16.04.2018</p>
      {file1 &&
        <iframe src="https://drive.google.com/file/d/1rK-xpJROOCBElGqCIO0jxidDZ9K6L56g/preview" width="100%" height="600" />}
      <p onClick={() => setFile2(!file2)} className={style.links}>Інформація про набір до 1 класу </p>
      {file2 &&
        <iframe src="https://drive.google.com/file/d/17W308L410SqV44j8Ny9kj3lWlDDTwsQr/preview" width="100%" height="600" />}
      <p onClick={() => setFile3(!file3)} className={style.links}>Порядок зарахування до першого класу</p>
      {file3 &&
        <iframe src="https://drive.google.com/file/d/1B8jX6zlSLe3SrmKdqcuHCkQarxmb1p1u/preview" width="100%" height="600" />}
      <p onClick={() => setFile4(!file4)} className={style.links}>Перелік документів для зарахування до першого класу</p>
      {file4 &&
        <iframe src="https://drive.google.com/file/d/17W308L410SqV44j8Ny9kj3lWlDDTwsQr/preview" width="100%" height="600" />}
      <p onClick={() => setFile5(!file5)} className={style.links}>Зарахування до ЗЗСО (загальні положення)</p>
      {file5 &&
        <iframe src="https://drive.google.com/file/d/1ANHJIWDZt-gpBPv8RCxErr_yOCX-6FGP/preview" width="100%" height="600" />}
      <p onClick={() => setFile6(!file6)} className={style.links}>Вчителі, які будуть навчати дітей у 2023-2024</p>
      {file6 &&
        <iframe src="https://drive.google.com/file/d/13GAKQincsHDNB4-wdcFv_xbeLmtgOQo_/preview" width="100%" height="600" />}
      <p onClick={() => setFile7(!file7)} className={style.links}>Інформація про кількість вільних місць</p>
      {file7 &&
        <iframe src="https://drive.google.com/file/d/1XvizqjAtupIuldJZ9XxX8ol9MrMeZ1eJ/preview" width="100%" height="600" />}
    </div>
  )
}

export default RulesFordAmission
