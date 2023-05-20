import React, { useState, useEffect } from 'react';
import style from './Header.module.scss';
import styles from '../information/Information.module.scss';

const FontSizeToggle = () => {
  const [isIncreased, setIsIncreased] = useState(false);

  const toggleFontSize = () => {
    setIsIncreased((prevIsIncreased) => !prevIsIncreased);
  };

  useEffect(() => {
    const newSize = isIncreased ? '30px' : '20px';
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      if (!element.classList.contains(style.text) && !element.classList.contains(styles.social)) {
        element.style.fontSize = newSize;
      }
    });
  }, [isIncreased]);

  return (
    <div>
      <button className={style.toggle} onClick={toggleFontSize}>ДЛЯ СЛАБОРОЗОРИХ</button>
    </div>
  );
};

export default FontSizeToggle;
