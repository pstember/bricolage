import React from 'react';

import Menu from './Menu';
import Message from './Message';
import Footer from './Footer';
import { Container } from 'reactstrap';

//import './include/bootstrap'

class App extends React.Component {
    render() {
      return (
        <Container fluid='true'>
          <Message/>
          <Footer/>
        </Container>
      )
    }
  }

export default App;