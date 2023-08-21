// FormCreator.js
import React, { useState } from 'react';
import QuestionEditor from './QuestionEditor';

function FormCreator({ onCreate }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleQuestionAdd = (question) => {
    setQuestions([...questions, question]);
  };

  const handleFormCreate = () => {
    const newForm = {
      title,
      description,
      questions,
    };
    onCreate(newForm);
    setTitle('');
    setDescription('');
    setQuestions([]);
  };

  return (
    <div>
      <h2>Create Form</h2>
      <div className="form-control">
        <input
          type="text"
          placeholder="Form Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control">
        <textarea
          placeholder="Form Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <QuestionEditor onQuestionAdd={handleQuestionAdd} />
      <button className='btn btn-create' onClick={handleFormCreate}>Create Form</button>
    </div>
  );
}

export default FormCreator;
