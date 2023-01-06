import './App.css';
import Characters from './components/Characters';
import React from 'react'
import Episodes from './components/Episodes';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div className="App">
        <Characters />
        <Episodes />
      </div>
    );
  }
}

export default App;
