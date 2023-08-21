import React, { useState } from 'react';

function MultipleChoiceEditor({ onOptionsChange }) {
  const [questionOptions, setQuestionOptions] = useState(['', '']);
  const [correctOptions, setCorrectOptions] = useState([]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...questionOptions];
    updatedOptions[index] = value;
    setQuestionOptions(updatedOptions);
    onOptionsChange(updatedOptions);
  };

  const handleCheckboxChange = (index) => {
    const updatedCorrectOptions = [...correctOptions];
    if (updatedCorrectOptions.includes(index)) {
      updatedCorrectOptions.splice(updatedCorrectOptions.indexOf(index), 1);
    } else {
      updatedCorrectOptions.push(index);
    }
    setCorrectOptions(updatedCorrectOptions);
  };

  return (
    <div className='form-control'>
      {questionOptions.map((option, index) => (
        <div key={index} className='form-control'>
          <input
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
          <label className='form-control-check'>
            Correct:
            <input
              type="checkbox"
              checked={correctOptions.includes(index)}
              onChange={() => handleCheckboxChange(index)}
            />
          </label>
        </div>
      ))}
    </div>
  );
}

export default MultipleChoiceEditor;
