import React from 'react';

import Menu from './Menu';
import Message from './Message';

import './include/bootstrap'

class App extends React.Component {
    render() {
      return (
        <div className="container-fluid">
          <Message/>
        </div>
      )
    }
  }

export default App;