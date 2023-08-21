import React from 'react';

function ShortAnswerEditor() {
  return <div>Short Answer Editor</div>;
}

function MultipleChoiceEditor() {
  return <div>Multiple Choice Editor</div>;
}

function CheckboxesEditor() {
  return <div>Checkboxes Editor</div>;
}

function QuestionTypes({ type }) {
  switch (type) {
    case 'shortAnswer':
      return <ShortAnswerEditor />;
    case 'multipleChoice':
      return <MultipleChoiceEditor />;
    case 'checkboxes':
      return <CheckboxesEditor />;
    default:
      return null;
  }
}

export default QuestionTypes;
