import React from "react"

class Meme extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render(props) {
        return (
            <div>
                <h1>{this.state.topText}</h1>
                <img src={this.props.img} alt={this.props.name} width="500px" height="500px"/>
                <h1>{this.state.bottomText}</h1>
                <form>
                    <input
                        type="text"
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    } 
}

export default Meme