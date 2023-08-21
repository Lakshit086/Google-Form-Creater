import React, { useState } from 'react';

function CheckboxesEditor({ options, onOptionsChange }) {
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    onOptionsChange(updatedOptions);
  };

  const handleCheckboxToggle = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].isChecked = !updatedOptions[index].isChecked;
    onOptionsChange(updatedOptions);
  };

  const [question, setQuestion] = useState({
    type: 'checkboxes',
    text: '',
    options: [{ text: '', isChecked: false }, { text: '', isChecked: false }],
  });

  const handleOptionsChange = (updatedOptions) => {
    setQuestion({
      ...question,
      options: updatedOptions,
    });
  };

  return (
    <div className='form-control'>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option.text}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <label className='form-control-check'>
            <input
              type="checkbox"
              checked={option.isChecked}
              onChange={() => handleCheckboxToggle(index)}
            />
            Correct
          </label>
        </div>
      ))}
    </div>
  );
}

export default CheckboxesEditor;
