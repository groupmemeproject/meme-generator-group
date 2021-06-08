import React from 'react'

export default function SavedMeme(props) {
        return (
            <div>
                <h1>{props.topText}</h1>
                <img src={props.imgUrl} alt={props.name} width="500px" height="500px"/>
                <h1>{props.bottomText}</h1>
            </div>
        )
}