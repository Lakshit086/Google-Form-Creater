// FormList.js
import React from 'react';

function FormList({ forms }) {
  return (
    <div>
      <h2>Your Forms</h2>
      <ul>
        {forms.map((form, index) => (
          <li key={index}>{form.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormList;
