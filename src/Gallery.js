import React, { Component } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox'

const galleryItems = [
    {
        title: "Sci-Fi 48 Hour Film Challenge",
        desc: "Sound design, sound mix, sound recordist, and producer",
        image_src: "48-Hour-Sci-Fi.jpg",
        video_url: "https://player.vimeo.com/video/212563122",
        aspect_ratio: "2-39-1"
    }, 
    {
        title: "BASHH – Sexual Health Care",
        desc: "Sound design and sound mix",
        image_src: "BASHH.jpg",
        video_url: "https://www.youtube.com/embed/3K_wMpiz2qE",
        
        aspect_ratio: "16-9"
    },
    {
        title: "The Physiological Society - Conquering Exam Stress",
        desc: "Sound design and sound mix",
        image_src: "Exam-Stress.jpg",
        video_url: "https://www.youtube.com/embed/-RZ86OB9hw4",
        aspect_ratio: "16-9"
    },
    {
        title: "Fukui Looping",
        desc: "Sound design and mix",
        image_src: "Fukui_Looping.jpg",
        video_url: "https://player.vimeo.com/video/189653401",
        aspect_ratio: "16-9"
    },
    {
        title: "Irwin Mitchell – Hannah Cockroft",
        desc: "Sound recordist, sound design and sound mix",
        image_src: "IM-DontQuitDoIt.jpg",
        video_url: "https://www.youtube.com/embed/9V6k5POdwhI",
        aspect_ratio: "16-9"
    },
    {
        title: "Instinctif Partners – Meet The Team",
        desc: "Sound design and sound mix",
        image_src: "IP-Meet-The-Team.jpg",
        video_url: "https://player.vimeo.com/video/123753729",
        aspect_ratio: "16-9"
    },
    {
        title: "Lidl - Warehouse Operations",
        desc: "Dialogue edit and sound mix",
        image_src: "Lidl.jpg",
        video_url: "https://www.youtube.com/embed/g9UEOww8LCk",
        aspect_ratio: "16-9"
    },
    {
        title: "Imaginography Logo Reveal",
        desc: "Sound design and sound mix",
        image_src: "Logo-Reveal.jpg",
        video_url: "https://player.vimeo.com/video/156334709",
        aspect_ratio: "16-9"
    },
    {
        title: "MT Wolf Soteria – Music Video",
        desc: "Sound recordist",
        image_src: "MT-Wolf-Soteria.jpg",
        video_url: "https://www.youtube.com/embed/jiYP6urAECk",
        aspect_ratio: "16-9"
    },
    {
        title: "Stonegate Pubs",
        desc: "Sound design and sound mix",
        image_src: "Stonegate.jpg",
        video_url: "https://player.vimeo.com/video/145541484",
        aspect_ratio: "16-9"
    },
    {
        title: "CBBC – The Playlist",
        desc: "Sound recordist",
        image_src: "ThePlaylistMattEdmondson.jpg",
        video_url: "https://player.vimeo.com/video/230949179",
        aspect_ratio: "16-9"
    },
    {
        title: "UK Power Networks – Short",
        desc: "Sound recordist and post sound",
        image_src: "UK Power Networks_Short.jpg",
        video_url: "https://player.vimeo.com/video/267422697",
        aspect_ratio: "16-9"
    },
    {
        title: "UK Power Networks – Radio Ad",
        desc: "Voice over director, sound design, and sound mix",
        image_src: "UKPowerNetworksRadioAd.jpg",
        video_url: "https://player.vimeo.com/video/193354776",
        aspect_ratio: "16-9"
    },
    {
        title: "Xbox Ad – Re-design",
        desc: "Re-design: Sound effects and mix",
        image_src: "Xbox Ad Re-Design.jpg",
        video_url: "https://player.vimeo.com/video/254230405",
        aspect_ratio: "16-9"
    },

]

class Gallery extends Component {

    state = {
        currentActive: null
    }

    setLightbox = (pos) => {
        if ((pos && pos < galleryItems.length && pos > 0) || pos === 0) {
            let newObj = galleryItems[pos]
            newObj.count = pos
            this.setState({currentActive: newObj})
        } else {
            this.setState({currentActive: null})
        }
        
    }

    render() {
        const GalleryImages = galleryItems.map((image, index) => {
            return <Image className={`gallery-item`} aspect_ratio={image.aspect_ratio} key={index} title={image.title} desc={image.text} image_src={image.image_src} video_url={image.video_url} onClick={() => this.setLightbox(index)}/>
        })
        
        return (
            <div className="container">
                <ul className="gallery-container">{GalleryImages}</ul>
                {this.state.currentActive ? <Lightbox item={this.state.currentActive} func={this.setLightbox}/> : ''}
            </div>
        )
    }
}

class Image extends Component {
    render() {

        const {className, title, onClick, image_src } = this.props;

        return (
            <li className={className} onClick={onClick}>
                <img src={require("./gallery/" + image_src)} alt={title}/>
                <span className="player-button">&#xf04b;</span>
            </li>
        )
    }
}


export {Gallery, galleryItems};