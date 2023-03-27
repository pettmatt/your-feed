import React, { FC } from 'react'
import './overlay.scss'

export interface OverlayProps {
    header: string,
    snippet: string,
    link: string,
    img: { 
        src: string,
        alt: string
    },
    close: (params: any) => any
}

const Overlay = ({ header, snippet, link, img, close }: OverlayProps) => {

    return (
        <div id="overlay">
            <button onClick={ close }>X</button>
            <div className="overlay-container">
                <img src={ img.src } alt={ img.alt } />
                <h2>{ header }</h2>
                <p>{ snippet }</p>
                <a href={ link }>Read more</a>
            </div>
        </div>
    )
}

export default Overlay