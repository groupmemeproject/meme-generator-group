import React from "react"
import axios from "axios"
import Meme from "./Meme"

class App extends React.Component{
    constructor() {
        super()

        this.state = {
            memes: [],
            savedMemes: [],
        }
        this.saveMeme = this.saveMeme.bind(this)
    }

    componentDidMount() {
        //Get Meme API
        axios.get("https://api.imgflip.com/get_memes")
        .then(res => res.data)
        .then(res => {
            this.setState(
                {
                    memes: [...res.data.memes],
                }
            )
        })
    }

    saveMeme(newMeme) {
        //Function passed to Save button inside Meme Component, pushes Meme State into savedMemes arr
            this.setState(prevState => {
                return {
                savedMemes: [...prevState.savedMemes, newMeme]
                }   
            })
    }




    render() {
        const memesArr = this.state.memes.map(meme => <Meme key={meme.id} name={meme.name} img={meme.url} save={this.saveMeme}/>)

        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]
        
        return(
            <div>
                {randomMeme}
            </div>
        )
        
    }
}

export default App