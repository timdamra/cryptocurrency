import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import actions from 'actions'
import NavBar from 'components/ui-components/navbar'
import TopList from 'components/containers/top_list'

const { GET_TOP_LIST } = actions

class App extends Component {
  fetchTopList = () => {
    this.props.getTopList()
  }
  render = () => {
    return (
      <Fragment>
        <main>
          <TopList
            topList={this.props.topList}
            fetchTopList={this.fetchTopList}
          />
        </main>
      </Fragment>
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
