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
        this.deleteMeme = this.deleteMeme.bind(this)
        this.editMeme = this.editMeme.bind(this)
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
                savedMemes: [...prevState.savedMemes, newMeme],
                }   
            })
    }

    deleteMeme(id) {
        //Deletes saved meme by Id
        const deletedMeme = this.state.savedMemes.filter(meme => meme.id !== id);
        // console.log(deletedMeme)
        this.setState(prevState => {
            return {
                savedMemes: prevState.savedMemes = [...deletedMeme]
            }
        })
    }

    editMeme(id, editedMeme) {
        const edits = this.state.savedMemes.map(meme => {
            if(meme.id === id) {
                meme.bottomText = editedMeme.bottomText
                meme.topText = editedMeme.topText
                return meme
            } 
            return meme
        })

        // console.log(edits)
            
        this.setState(prevState => {
            return {
                savedMemes: prevState.savedMemes = [...edits]
            }
        })
    }

        

    render() {
        const memesArr = this.state.memes.map(meme => <Meme key={Number(Math.floor(Math.random() * 1000000))} id={meme.id} name={meme.name} img={meme.url} save={this.saveMeme}/>)
        const savedMemes = this.state.savedMemes.map(meme => <SavedMeme key={Number(Math.floor(Math.random() * 1000000))} id={meme.id} name={meme.name} img={meme.imgUrl} topText={meme.topText} bottomText={meme.bottomText} delete={this.deleteMeme} edit={this.editMeme} />)
        const randomMeme = memesArr[Math.floor(Math.random() * memesArr.length)]
        // console.log(this.state.savedMemes);
        
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