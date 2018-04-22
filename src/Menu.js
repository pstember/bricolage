import React from 'react';
import { Row } from 'reactstrap';

class Menu extends React.Component {
    render() {
        return (
            <Row className="container MyComponent">
                <Row className="jumbotron">
                    Hello there!
          <button type="button" className="btn btn-primary">
                        Bootstrap Button!
          </button>
                </Row>
            </Row>
        )
    }
}

export default Menu;