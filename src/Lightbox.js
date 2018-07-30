import React, { Component } from 'react';
import './Lightbox.css';
class Lightbox extends Component {

    state = {
        toggleInfo: false
    }

    close = (func) => {
        func(null)
    }

    toggleDesc = () => {
        this.setState({
            toggleInfo: !this.state.toggleInfo
        })
    }
    
    render() {

        return (
            <div className="lightbox-container" >
                <NextItem pos={this.props.item.count} func={this.props.func}/>
                <PrevItem pos={this.props.item.count} func={this.props.func}/>
                <div className="lightbox">
                <div className="lightbox-header">
                    <h2>{this.props.item.title}</h2>
                    <div className="controls">
                        <Info func={this.toggleDesc}/>
                        <CloseLightbox func={this.props.func}/>
                    </div>
                </div>

                    <div className="content">
                        <div className={`_${this.props.item.aspect_ratio}`} style={{position:"relative"}}>
                            <iframe src={this.props.item.video_url} style={{
                                position:"absolute",
                                top:"0",
                                left:0,
                                width:"100%",
                                height:"100%"}} frameBorder="0" allowFullScreen>
                            </iframe>
                        </div>
                        <div className={`description desc-toggle-${this.state.toggleInfo}`}>
                            {this.props.item.desc}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class NextItem extends Component {

    nextItem = (pos, func) => {
        func(pos+1)
    }

    render() {
        return (
            
            <div className="next-item" onClick={() => {this.nextItem(this.props.pos, this.props.func)}}></div>
        )
    }
}

class PrevItem extends Component {

    prevItem = (pos, func) => {
        func(pos-1)
    }

    render() {
        return (
            <div className="prev-item" onClick={() => {this.prevItem(this.props.pos, this.props.func)}}></div>
        )
    }
}

class CloseLightbox extends Component {

    close = (func) => {
        func(null)
    }

    render() {
        return (
            <div className="close-lightbox" onClick={() => {this.close(this.props.func)}}></div>
        )
    }
}

class Info extends Component {

    render() {
        return (
            <div className="info-lightbox" onClick={() => {this.props.func()}}></div>
        )
    }
}
export default Lightbox;

