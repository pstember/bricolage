import React from 'react';

import Message from './Message';
import Global from './Global';
import Footer from './Footer';
import { Container, Row, Col } from 'reactstrap';

//import './include/bootstrap'

class App extends React.Component {
    render() {
      return (
        <Container fluid='true'>
          <Row className='justify-content-md-center'>
            <Col xs="2">
              <Global/>
            </Col>
            <Col xs="5">
              <Message channel='SMS' limit='10' frequence='60' />
            </Col>
            <Col xs="5">
              <Message channel='FB' limit='10' frequence='60' />
            </Col>
          </Row>
          <Footer/>
        </Container>
      )
    }
  }

export default App;