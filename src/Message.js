import React from 'react';
import { Row, Col, Table } from 'reactstrap';

class Message extends React.Component {
    
    constructor(){
        super();
        this.state = {            
            messages: [],
            curTime : new Date().toLocaleString(),
        };
    }

    componentWillMount() {
        this.newValue();
    }

    componentDidMount() {
        setInterval( () => {
          this.newValue()
        },parseInt(this.props.frequence)*1000)
    }


    getAPIURL() {
        var base = "https://bt-showcase-api.herokuapp.com/messages?"
        if(this.props.limit) {
            base += "limit=" + this.props.limit + '&';
        }
        if(this.props.channel) {
            base += "channel=" + this.props.channel + '&';
        }
        return base;
    }

    newValue() {
        fetch(this.getAPIURL())
            .then(response => response.json())
            .then(responseJson => this.setState({ 
                count: responseJson['count'],
                messages: responseJson['messages']
            }));
        this.setState({
            curTime : new Date().toLocaleString()
          })
    }
    

    render() {
        return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs="9">
                    <img src="/img/IMI_Brandmark_CMYK.png" class="img-fluid" alt="IMImobile logo"/>
                </Col>
            </Row>            
            <Row className="justify-content-md-center">
                <Col xs="9">
                    Last updated at: {this.state.curTime}
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="9">
                Number of received messages: {this.state.messages.length}
                </Col>                
            </Row>
            <Row className="justify-content-md-center">
                <Col xs="9">
                    Messages:<br/>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th scope="col">Channel</th>
                                <th scope="col">Direction</th>
                                <th scope="col">Author</th>
                                <th scope="col">Keyword</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.messages.map((message, index) => (
                                <tr eventKey={index}>
                                    <td >{message.channel}</td>
                                    <td>{message.direction}</td>
                                    <td>{message.created_by}</td>
                                    <td>{message.keyword}</td>
                                    <td>{message.content}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </div>
        )
    }
}

export default Message;