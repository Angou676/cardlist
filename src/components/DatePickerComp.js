// DatePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePickerComp() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const customInputStyle = {
    backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/010/160/988/original/calendar-icon-sign-symbol-design-free-png.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 10px center',
    backgroundSize: '20px 20px',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '30px',
    pointerEvents: 'none'
  };

  const hideCalendarIconStyle = {
    '& .react-datepicker__close-icon::after': {
      display: 'none'
    }
  };

  return (
    <DatePicker
    selected={selectedDate}
    onChange={handleDateChange}
    dateFormat="yyyy-MM-dd"
    // isClearable
    placeholderText="Select a date"
    wrapperClassName="w-full" 
    // showYearDropdown
    // showMonthDropdown
    dropdownMode="select"
    appendToBody={true}
    popperPlacement="auto" 
      customInput={
        <div className="relative" style={hideCalendarIconStyle}>
          <input
            className="w-full px-3 py-2 bg-cyan-100 rounded-md border" 
            placeholder="Select a date"
            style={customInputStyle}
          />
        </div>
      }
    />
  );
}

export default DatePickerComp;
