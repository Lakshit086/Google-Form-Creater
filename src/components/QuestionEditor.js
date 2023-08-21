import React, { useState } from 'react';
import QuestionTypes from './QuestionTypes';
import MultipleChoiceEditor from './MultipleChoiceEditor';
import CheckboxesEditor from './CheckboxesEditor';
import ShortAnswerEditor from './ShortAnswerEditor';

function QuestionEditor({ onQuestionAdd }) {
  const [questionType, setQuestionType] = useState('shortAnswer');
  const [questionText, setQuestionText] = useState('');
  const [isRequired, setIsRequired] = useState(true);

  const handleQuestionAdd = () => {
    const newQuestion = {
      type: questionType,
      text: questionText,
      isRequired,
    };

    if(!questionText){
      alert("Question text And Answer cannot be empty!! ")
    }

    onQuestionAdd(newQuestion);
    setQuestionText('');
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

  const handleAnswerChange = (newAnswer) => {
    setQuestion({
      ...question,
      answer: newAnswer,
    });
  };

  const handleCorrectOptionChange = (correctOption) => {
    setQuestion({
      ...question,
      correctOption,
    });
  };

  let content
  if (questionType==="multipleChoice") {
    content = <MultipleChoiceEditor
    options={question.options}
    correctOption={question.correctOption}
    onOptionsChange={handleOptionsChange}
  />
  } else if(questionType==="checkboxes") {
    content = <CheckboxesEditor options={question.options} onOptionsChange={handleOptionsChange} />
  } else if(questionType === "shortAnswer") {
    content = <ShortAnswerEditor onAnswerChange={handleAnswerChange}/>
  }

  return (
    <div>
      <h3>Add Question</h3>
      <select value={questionType} onChange={(e) => setQuestionType(e.target.value)}>
        <option value="shortAnswer">Short Answer</option>
        <option value="multipleChoice">Multiple Choice</option>
        <option value="checkboxes">Checkboxes</option>
      </select>
      <div className="form-control">
        <input
          type="text"
          placeholder="Question Text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>
      {content}
      <div className="form-control form-control-check">  
        <label>
          Required:
          <input
            type="checkbox"
            checked={isRequired}
            onChange={(e) => setIsRequired(e.target.checked)}
          />
        </label>
      </div>
      <button className='btn' onClick={handleQuestionAdd}>Add Question</button>
      {/* Render the appropriate question editing component based on questionType */}
        {<QuestionTypes type={questionType} />}
    </div>
  );
}

export default QuestionEditor;
