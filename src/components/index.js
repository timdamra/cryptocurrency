import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import actions from 'actions'
import NavBar from 'components/ui-components/navbar'
import TopList from 'components/containers/top_list'

const { GET_TOP_LIST, GET_HISTORICAL_DATA_FOR_SYMBOL } = actions

class App extends Component {
  fetchTopList = () => {
    this.props.getTopList()
    this.props.fetchHistoricalData('BTC')
  }
  render = () => {
    return (
      <Fragment>
        <main>
          <TopList
            topList={this.props.topList}
            fetchTopList={this.fetchTopList}
            historicalData={this.props.historicalData}
          />
        </main>
      </Fragment>
    )
  }
  static propTypes = {
    getSingleSymbol: PropTypes.func
  }
}

const mapStateToProps = ({ topList, historicalData }) => {
  return {
    topList,
    historicalData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTopList: () => dispatch({ type: GET_TOP_LIST }),
    fetchHistoricalData: coin => dispatch({ type: GET_HISTORICAL_DATA_FOR_SYMBOL, payload: coin })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
