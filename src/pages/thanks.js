import React, { Component } from 'react';

class Thanks extends Component {

    componentDidMount() {
        window.setTimeout(function() {
            window.location.href = "http://shanegravestock.co.uk/thanks";
        }, 3000)
    }

    render() {
        return (
            <div>
                <h1>Thank you for sending an email!</h1>
                <p style={{fontSize: "1.5em"}}>I'll be in touch shortly</p>
            </div>
        );
    }
}

export default Thanks;