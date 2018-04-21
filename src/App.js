import React from 'react';

import Menu from './Menu';
import Game from './Game';

import './include/bootstrap'

class App extends React.Component {
    render() {
      return (
        <div>
          <Menu/>
          <Game/>
        </div>
      )
    }
  }

export default App;