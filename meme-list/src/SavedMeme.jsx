import React from 'react'
import "./savedmeme.css"

class SavedMeme extends React.Component {
    constructor(props) {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            id: props.id,
            name: props.name,
            imgUrl: props.img
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        //Generates Preview when typing inside of inputs
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="savedMeme">
                <div className="savedMemes">
                    <div className="savedMemeBox">
                        <h1 className="savedTop savedH1">{this.props.topText}</h1>
                        <img src={this.state.imgUrl} alt={this.state.name} width="350px" height="350px"/>
                        <h1 className="savedBottom savedH1">{this.props.bottomText}</h1>
                    </div>
                    <input placeholder="Edit Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input placeholder="Edit Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                    <br/>
                    <button onClick={() => this.props.edit(this.state.id, this.state)}>Save</button>
                    <br/>
                    <button onClick={() => this.props.delete(this.state.id)}>Delete</button>
                </div>
            </div>
        )
    }     
}

export default SavedMeme