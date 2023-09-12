import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    {
      label: 'Option 1',
      value: 'option1',
      checkboxes: [
        { label: 'Checkbox 1', value: 'checkbox1' },
        { label: 'Checkbox 2', value: 'checkbox2' },
      ],
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    setSelectedOption(optionValue);
  };

  return (
    <div className="relative">
      <div className="flex flex-col">
        <label htmlFor="input1" className="text-left text-gray-600 mb-1">
          Last Name<span>*</span>
        </label>
        <div
          id="input2"
          className="w-full px-3 py-2 bg-cyan-100 rounded-md border h-10 focus:outline-none"
          onClick={toggleDropdown}
        >
          {selectedOption || 'Select an option'} 
        </div>
        
        {isOpen && (
          <div className="absolute mt-10 bg-white border border-gray-300 w-full max-h-48 overflow-y-auto rounded-md">
            {options.map((option) => (
              <div
                key={option.value}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick(option.value)}
              >
                <input type="text" placeholder="Enter last name" />
                {option.checkboxes.map((checkbox) => (
                  <label key={checkbox.value} className="block">
                    <input type="checkbox" value={checkbox.value} /> {checkbox.label}
                  </label>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
