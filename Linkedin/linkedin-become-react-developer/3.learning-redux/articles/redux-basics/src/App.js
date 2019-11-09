import React from 'react';
import './App.css';
import List from './components/ListComponent';
import Form from './components/FormComponent';

const App = () => {
  return (
    <div className="row mt-5">
      <div className="col-md-4 offset-md-1">
        <h2>Articles</h2>
        <List />
      </div>
      <div className="col-md-4 offset-md-1">
        <h2>Add a new article</h2>
        <Form />
      </div>
    </div>
  );
};

export default App;
