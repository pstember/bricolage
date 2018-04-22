import React from 'react';

class Message extends React.Component {
    
    constructor(){
        super();
        this.state = {
            messages: [],
            curTime : new Date().toLocaleString(),
        };
    }

    componentDidMount() {
        setInterval( () => {
          this.newValue()
        },10000)
    }

    newValue() {
        fetch('http://localhost:3000/messages')
            .then(response => response.json())
            .then(responseJson => this.setState({ messages: responseJson }));
        this.setState({
            curTime : new Date().toLocaleString()
          })
    }
    

    render() {
        return (
        <div>
            <div class="row justify-content-md-center">
                <div class="col col-9">
                    Time is {this.state.curTime}
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-9">
                Number of received messages: {this.state.messages.length}
                </div>                
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-9">
                    Messages:<br/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Channel</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.messages.map((message, index) => (
                                <tr eventKey={index}>
                                    <td >{message.channel}</td>
                                    <td>{message.autor}</td>
                                    <td>{message.content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
    }
}

export default Message;