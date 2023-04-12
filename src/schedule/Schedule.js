import React, { useState } from 'react';
import { ScheduleData } from './ScheduleData';
import Select from 'react-select';
import style from './Schedule.module.scss'
function Schedule() {
  const [selectedClass, setSelectedClass] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedClass(selectedOption);
  };
  return (
    <div>
      <div className={style.container}>
        <Select
          value={selectedClass}
          onChange={handleChange}
          options={ScheduleData}
          placeholder="Клас"
          classNamePrefix="dropdown"
          isClearable={true}
          isSearchable={true}
          maxMenuHeight={220}
          menuPlacement="auto"
          className={style.dropdownWrapper}
        />
      </div>
      <div className='p-40'>
        {selectedClass && selectedClass.data.map(item => (
          <div className={style.wrapper} >
            <div className={style.time}>{item.time}</div>
            <div className={style.subject}>{item.subject}</div>
          </div>
        ))}
      </div>



    </div >
  );
}

export default Schedule; 