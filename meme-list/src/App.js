import React from "react"
import axios from "axios"
import Meme from "./Meme"
import SavedMeme from './SavedMeme'

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
        const savedMemes = this.state.savedMemes.map(meme => <SavedMeme key={meme.id} name={meme.name} img={meme.imgUrl} topText={meme.topText} bottomText={meme.bottomText} />)
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]
        console.log(this.state.savedMemes);
        
        return(
            <main>
                <div>
                    {randomMeme}
                </div>

                <div>
                    {savedMemes}
                </div>
            </main>
        )
        
    }
}

export default App