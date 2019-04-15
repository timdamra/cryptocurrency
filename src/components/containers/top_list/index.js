import React, { useEffect, useState } from 'react'
import CoinListItem from 'components/ui-components/coin_list_item'

export function TopList({ topList, fetchTopList, historicalData }) {
  useEffect(() => {
    fetchTopList()

    // cleanup effect which runs on unmounting
    return () => console.log('unmounting')
  }, [topList.length]) // second param in array is variable which useEffect monitors -> if no change, then no re-render

  const [activeCoin, setActiveCoin] = useState(0)
  const isListAvailable = topList && topList.length > 0

  // console.log(topList)
  // console.log(activeCoin)

  return isListAvailable ? (
    <ul>
      {topList.map((coin, idx) => (
        <CoinListItem
          activeCoin={activeCoin}
          onClick={() => setActiveCoin(idx)}
          key={idx}
          idx={idx}
          coin={coin}
        />
      ))}
    </ul>
  ) : (
    <h2>Waiting..</h2>
  )
}

export default TopList
