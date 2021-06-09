import React from 'react'

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
            <div>
                <h1>{this.props.topText}</h1>
                <img src={this.state.imgUrl} alt={this.state.name} width="500px" height="500px"/>
                <h1>{this.props.bottomText}</h1>
                <input placeholder="Edit Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                <input placeholder="Edit Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                <button onClick={() => this.props.edit(this.state.id, this.state)}>Save</button>
                <br/>
                <button onClick={() => this.props.delete(this.state.id)}>Delete</button>
            </div>
        )
    }     
}

export default SavedMeme