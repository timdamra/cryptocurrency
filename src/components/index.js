import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import actions from 'actions'
import NavBar from 'components/ui-components/navbar'

const { GET_TOP_LIST } = actions

class App extends Component {
  componentDidMount = () => {
    this.props.getTopList()
  }
  render = () => {
    return (
      <div className="content-container">
        <NavBar />
        <section>CONTENT</section>
        <footer>FOOTER</footer>
      </div>
    )
  }
  static propTypes = {
    getSingleSymbol: PropTypes.func
  }
}

const mapStateToProps = ({ topList }) => {
  return {
    topList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopList: () => dispatch({ type: GET_TOP_LIST })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
