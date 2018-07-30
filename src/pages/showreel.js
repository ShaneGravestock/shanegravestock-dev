import React, { Component } from 'react';
import './showreel.css'
class Showreel extends Component {
    render() {
        return (
            <div
            style={{
                padding: "1em 1em 1em 1em",
            }}>
                <div className="showreel-container" style={{position:"relative"}}>
                <iframe src="https://player.vimeo.com/video/107805398" style={{
                position:"absolute",
                top:0,
                left:0,
                width:"100%",
                border: 0,
                height:"100%"}} frameBorder="0"  allowFullScreen></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </div>
        );
    }
}

export default Showreel;