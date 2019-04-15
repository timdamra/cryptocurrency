import React, { useMemo, useEffect } from 'react'
import { connect } from 'react-redux'
import { Grid } from "@material-ui/core"

import LineChart from 'components/ui-components/line_chart'
import actions from 'actions'

import './index.css'

const { GET_HISTORICAL_DATA_FOR_SYMBOL } = actions

function addPercentageStyles(percent) {
  if(percent > 0) {
    return (
      <p className="fs-12 f-greeen">{`+${percent}%`}</p>
    )
  }

  return (
    <p className="fs-12 f-red">{`-${percent}%`}</p>
  )
}

function addHigherPriceStyles(price) {
  return (
    <p className="f-blue">{price}</p>
  )
}

function currentHistoricalData(data = []) {
  return data && data.length && data.map(timedData => {
    const { time, close } = timedData

    return [time, close]
  })
}

function CoinListItem(props) {
  const {
    idx,
    onClick,
    historicalData,
    fetchHistoricalData,
    coin: {
      CoinInfo: {
        FullName,
        Name,
        ImageUrl,
        Id
      },
      DISPLAY: {
        USD: {
          PRICE: Price,
          CHANGEPCT24HOUR
        }
      }
    }
  } = props

  const isAboveZero = CHANGEPCT24HOUR > 0
  const displayChart = props.activeCoin === idx

  const styledPercentage = useMemo(() => {
    return addPercentageStyles(CHANGEPCT24HOUR)
  }, [isAboveZero])

  const styledPrice = useMemo(() => {
    return addHigherPriceStyles(Price)
  }, [Price])

  useEffect(() => {
    fetchHistoricalData(Name)

    return () => console.log(Name)
  }, [displayChart])

  return (
    <li onClick={() => {
      onClick()
      fetchHistoricalData(Name)
      console.log(historicalData)
    }} className="coin-list-item">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <h4>{Name}</h4>
          <p>{FullName}</p>
        </Grid>
        <Grid item>
          {styledPercentage}
        </Grid>
        <Grid item>
          <p>{styledPrice}</p>
        </Grid>
      </Grid>
      {displayChart ? (
        <LineChart
          data={[
            {
              label: Name,
              data: historicalData.length > 0 && historicalData.map(timedData => ([timedData.time, timedData.close]))
            }
          ]}
        />
      ) : null}
    </li>
  )
}

const mapStateToProps = ({ historicalData }) => {
  return {
    historicalData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHistoricalData: coin => dispatch({ type: GET_HISTORICAL_DATA_FOR_SYMBOL, payload: coin })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinListItem)
