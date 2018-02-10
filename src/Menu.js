import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render() {
        return (
            <div className="container MyComponent">
                <div className="jumbotron">
                    Hello there!
          <button type="button" className="btn btn-primary">
                        Bootstrap Button!
          </button>
                </div>
            </div>
        )
    }
}

export default Menu;