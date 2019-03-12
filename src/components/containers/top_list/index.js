import React, { useEffect } from 'react'

export function TopList({ topList, fetchTopList }) {
  useEffect(() => {
    fetchTopList()

    // cleanup effect which runs on unmounting
    return () => console.log('unmounting')
  }, [topList.length]) // second param in array is variable which useEffect monitors -> if no change, then no re-render

  const isListAvailable = topList && topList.length > 0

  return isListAvailable ? (
    <ul>
      {topList.map((coin, idx) => {
        return <li key={idx}>{coin.CoinInfo.Name}</li>
      })}
    </ul>
  ) : (
    <h2>Waiting..</h2>
  )
}

export default TopList
