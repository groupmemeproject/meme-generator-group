import React from "react"
import axios from "axios"
import Meme from "./Meme"

class App extends React.Component{
    constructor() {
        super()

        this.state = {
            memes: [],
            savedMemes: []
        }
    }

    componentDidMount() {
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => res.data)
        .then(res => {
            this.setState(
                {
                    memes: [...res.data.memes]
                }
            )
        })
        // .then(() => console.log(this.state.memes))
    }


    render() {
        const memesArr = this.state.memes.map(meme => <Meme key={meme.id} name={meme.name} img={meme.url} width={meme.width} height={meme.height} />)
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]
        
        return(
            <div>
                {randomMeme}
            </div>
        )
        
    }
}

export default App