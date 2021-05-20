// create your App component here
import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super()
        this.state = {
            astros: []
        }
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(astros => {
                this.setState({
                    astros: astros.people
                }
                )
            }
            )
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.state.astros.map(astro => <li>{astro.name}</li>)}
                </ul>
            </div>  
        )
    }
}

export default App