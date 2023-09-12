import { forwardRef, useState, useCallback } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar, BiTime } from "react-icons/bi";

function DatePicker1(props) {
    const now = new Date();
    now.setDate(now.getDate());

    return (
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
       <DatePicker
       {...props}
       selected={props.selected}
       minDate={now}
       renderCustomHeader={({
           date,
           decreaseMonth,
           increaseMonth,
       }) => (
           <div>
               <button onClick={decreaseMonth}>Previous</button>
               <span>{date.toLocaleDateString()}</span>
               <button onClick={increaseMonth}>Next</button>
           </div>
       )}
   />

        <style>
            {
                `
                .react-datepicker {
                  background-color: black;
                }
                .react-datepicker__day--disabled {
                    color: gray !important;
                }
                .react-datepicker__day:hover {
                    background-color: blue;
                    color: white;
                }
                .react-datepicker__day--selected {
                    background-color: blue;
                    color: white;
                }
                .react-datepicker__month-text,
                .react-datepicker__day-name,
                .react-datepicker__current-month,
                .react-datepicker__day,
                .react-datepicker__time-name,
                .react-datepicker__day--selected,
                .react-datepicker__day--today {
                  color: white;
                }
                .react-datepicker__header{
                    background-color:black;
                }
                react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after {
                    border-top: none;
                    border-bottom-color: black;
                }
                .react-datepicker__navigation{
                    top: 9px;
                }
                `
            }
        </style>
    </div>
    );
}

function InputGroup6({ label, name, value, onChange, type = "text", decoration, inputClassName = "", decorationClassName = "", disabled, from }) {
    console.log(from)
    return (
        <div className="flex flex-row items-stretch w-full">
            <input
                style={{ width: from ? "495px" : '200px',  borderRadius: '10px 0px 0px 10px', color: '#a3a2a2' }}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={label}
                aria-label={label}
                className={`
                peer block p-3 text-gray-600 bg-cyan-100 border border-r-0 focus:border-black-400 focus:bg-cyan-100 focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300
                 ${disabled ? "bg-gray-200" : ""} ${inputClassName}
                 `}
                disabled={disabled}
            />
            <div
                className={`flex items-center rounded-tl-none rounded-bl-none rounded pr-3 py-3 text-gray-600 bg-cyan-100 border border-l-0 peer-focus:border-black-500 peer-focus:bg-cyan transition-colors duration-300 
                ${disabled ? "bg-gray-200" : ""} ${decorationClassName}`}
                style={{ borderRadius: '0px 10px 10px 0px', }}
            >
                {decoration}
            </div>
        </div>
    );
}

const CustomInputField = forwardRef(({ name, value, label, onClick, disabled, inputClassName, icon = <BiCalendar size="1rem" />, from }, ref) => (
    <button className="w-full " onClick={onClick} ref={ref} disabled={disabled} style={{ width: '93%', }}>
        <InputGroup6
            name={name}
            value={value}
            onChange={() => null}
            label={label}
            decoration={icon}
            disabled={disabled}
            inputClassName={inputClassName}
            from={from}
        />
    </button>
)
);

function DatePickerComp({ from }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="flex flex-col  w-full rounded-md" >
            <DatePicker1
                selected={startDate}
                onChange={setStartDate}
                customInput={<CustomInputField name="name" label="Select date" from={from} />}
                startDate={startDate}
                popperPlacement="bottom"
            />
        </div>
    );
}

export default DatePickerComp 
