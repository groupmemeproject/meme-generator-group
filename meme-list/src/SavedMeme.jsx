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
            <div className="save-outer">
                <div className="save-container">
                    <h1 className="save-upper">{this.props.topText}</h1>
                    <img className="img" src={this.state.imgUrl} alt={this.state.name} width="500px" height="500px"/>
                    <h1 className="save-lower">{this.props.bottomText}</h1>
                </div>
                <div className="save-input">
                    <input placeholder="Edit Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}/>
                    <input placeholder="Edit Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}/>
                </div>
                <button className="button" onClick={() => this.props.edit(this.state.id, this.state)}>Save</button>
                <button className="button" onClick={() => this.props.delete(this.state.id)}>Delete</button>
            </div>
        )
    }     
}

export default SavedMeme