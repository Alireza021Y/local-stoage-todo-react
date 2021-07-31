import React from 'react';
import Form from './components/Form'


class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Form />
          <h1>To Do List</h1>
        <ul>
          <li>finish this app</li>
          <li>create a local storage</li>
          <li>upload this to github</li>
          <li>learn indexed DB</li>
          <li>Edit main app</li>
        </ul>
      </div>
    );
  };
}


export default App;