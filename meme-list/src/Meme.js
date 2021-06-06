import React from "react"

function Meme(props) {
    // console.log(props.url)
    return (
        <div>
            <img src={props.img} alt={props.name}/>
        </div>
    )
}

export default Meme