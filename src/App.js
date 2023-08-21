// App.js
import React, { useState } from 'react';
import FormList from './components/FormList';
import FormCreator from './components/FormCreator';

function App() {
  const [forms, setForms] = useState([]);

  const handleFormCreate = (newForm) => {
    setForms([...forms, newForm]);
  };

  return (
    <div>
      <FormList forms={forms} />
      <FormCreator onCreate={handleFormCreate} />
    </div>
  );
}

export default App;
