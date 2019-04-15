import React, { useMemo } from 'react'
import { Grid } from "@material-ui/core"

import './index.css'

function addPercentageStyles(percent) {
  if(percent > 0) {
    return (
      <p className="fs-12 f-greeen">{`+${percent}`}</p>
    )
  }

  return (
    <p className="fs-12 f-red">{`-${percent}`}</p>
  )
}

function addHigherPriceStyles(price) {
  return (
    <p className="f-blue">{price}</p>
  )
}

export default function CoinListItem(props) {
  const {
    idx,
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

  const styledPercentage = useMemo(() => {
    return addPercentageStyles(CHANGEPCT24HOUR)
  }, [isAboveZero])

  const styledPrice = useMemo(() => {
    return addHigherPriceStyles(Price)
  }, [Price])

  return (
    <li className="coin-list-item">
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
    </li>
  )
}
