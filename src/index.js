import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render = () => {
        return (
            <p>Hello World</p>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
