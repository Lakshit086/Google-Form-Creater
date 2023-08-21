import React from 'react';

function ShortAnswerEditor({ answer, onAnswerChange }) {

  return (
    <div className='form-control'>
      <input
        type="text"
        placeholder="Short Answer"
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
      />
    </div>
  );
}

export default ShortAnswerEditor;
