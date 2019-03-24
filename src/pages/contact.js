import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {

    state = {
        first_name: 'shane',
        last_name: 'gravestock',
        tld: '.net'
    }

    render() {

        return (
            <div className="contact-wrapper">
            <div className="header">
                <p>Contact me at {this.state.first_name}@{this.state.last_name}{this.state.tld}</p>
                <p>Or leave me a message below</p>
            </div>
                <form className="contact-form" method="POST" action="https://formspree.io/shane@gravestock.net">
                <label>
                    Name
                    <input name="name" type="text"></input>
                </label>
                <label>
                    Email
                    <input name="_replyto" type="email"></input>
                    </label>
                <label>
                    Subject
                    <input name="_subject" type="text"></input>
                    </label>
                <label>
                    Message
                    <textarea name="message" type="text"></textarea>
                </label>
                    <button type="submit" value="Send">Submit</button>
                </form>

                <input type="text" name="_gotcha" style={{display:"none"}} />
                <input type="hidden" name="_next" value="https://shanegravestock.co.uk" />
                
            </div>
        );
    }
}

export default Contact;