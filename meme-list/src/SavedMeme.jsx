import React from 'react'

export default function SavedMeme(props) {
    // console.log(props)
        return (
            <div>
                <h1>{props.topText}</h1>
                <img src={props.img} alt={props.name} width="500px" height="500px"/>
                <h1>{props.bottomText}</h1>
                <button>Edit</button>
                <button onClick={() => props.delete(props.id)}>Delete</button>
            </div>
        )
}