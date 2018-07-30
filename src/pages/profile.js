import React, { Component } from 'react';
import './gallery-grid.css'


let galleryItems = [
    {
        src: "BASHH.jpg",
        external_url: "https://www.youtube.com/watch?v=3K_wMpiz2qE"
    },
    {
        src: "Cape Films.jpg",
        external_url: "https://www.youtube.com/watch?v=jiYP6urAECk"
    },
    {
        src: "CBBC.jpg",
        external_url: "https://www.bbc.co.uk/cbbc/shows/the-playlist"
    },
    {
        src: "Cinema Lumina.jpg",
        external_url: "https://www.cinemalumina.com/"
    },
    {
        src: "Founders Factory.jpg",
        external_url: "https://foundersfactory.com/"
    },
    {
        src: "Foundry-42.jpg",
        external_url: "https://cloudimperiumgames.com/"
    },
    {
        src: "Instinctif Partners.jpg",
        external_url: "https://instinctif.com/uk/"
    },
    {
        src: "Irwin Mitchell.jpg",
        external_url: "https://www.irwinmitchell.com/"
    },
    {
        src: "Jump Start Productions.jpg",
        external_url: "https://www.jumpstartproductions.co.uk/"
    },
    {
        src: "Lidl.jpg",
        external_url: "https://www.youtube.com/watch?v=g9UEOww8LCk"
    },
    {
        src: "Proper Charlie Productions.jpg",
        external_url: "https://www.facebook.com/propercharlieuk/"
    },
    {
        src: "Shopmium.jpg",
        external_url: "https://www.shopmium.com/uk"
    },
    {
        src: "Tony Burke.jpg",
        external_url: "https://www.tonyburke.org/"
    },
    {
        src: "UK Power Networks.jpg",
        external_url: "https://vimeo.com/267422697/64caa64320"
    },
    {
        src: "United Magic Studios.jpg",
        external_url: "https://www.unitedmagic.co.uk/"
    },
    {
        src: "Walt-Disney.jpg",
        external_url: "https://www.thewaltdisneycompany.com/"
    },
    {
        src: "York-St-John-University.jpg",
        external_url: "https://vimeo.com/214697360"
    },
    {
        src: "Strawberry Blond TV.jpg",
        external_url: "https://www.strawberryblond.co.uk/"
    },
]

class Profile extends Component {
    render() {
        return (
            <div className="container-profile">
                <header>
                    <img alt="header-banner" src={require("../Banner.jpg")} width="100%" height="auto"/>
                </header>
                <section>
                    <p>Hello there! I’m Shane Gravestock, based in Brighton and London. I’m available to hire as a freelance sound recordist, sound designer and sound mixer for corporate, commercial, short and feature films. Please get in touch using the <a href="/contact">contact page.</a></p>
                    <br/>
                    <p>I started off my journey by graduating with a 1st class in BSc (Hons) Music Technology. Half way through university I moved towards film sound and fell in love with every aspect of it. I started freelancing at university creating corporate videos and further honing my craft. From there I joined Instinctif Partners as a video and sound specialist and worked with countless companies such as Lidl, Virgin Active, and Stonegate Pubs. After working at Instinctif Partners for three years I started full time freelancing along with starting my own film production company called <a href="http://straightpointfilms.co.uk/">Straight Point Films.</a></p>
                </section>
                <footer className="company-grid">
                    {galleryItems.map((image, index) => {
                        return <GalleryItem key={index} src={require("../companies/" + image.src)} external_url={image.external_url}/>
                    })}
                </footer>
            </div>
        );
    }
}

class GalleryItem extends Component {
    render() {
        return (
            <div>
                <a href={this.props.external_url}  target="_blank" rel="noopener noreferrer"><img alt="company-logo" width="100%" src={this.props.src}/></a>
            </div>
        )
    }
}

export default Profile;