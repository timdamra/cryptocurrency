import React, { Component } from 'react'
import { connect } from 'react-redux'

import actions from '../actions'

const {
    GET_SINGLE_SYMBOL
} = actions

class App extends Component {
    componentDidMount = () => {
        this.props.getSingleSymbol()
    }
    render = () => {
        return (
            <p>Whats up World</p>
        )
    }
}

const mapStateToProps = ({ singleSymbol }) => {
    return {
        singleSymbol
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSingleSymbol: () => dispatch({ type: GET_SINGLE_SYMBOL })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
