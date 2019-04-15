import { takeLatest, put, call } from 'redux-saga/effects'

import actions from 'actions'

const {
  GET_HISTORICAL_DATA_FOR_SYMBOL,
  HISTORICAL_DATA_SUCCESS,
  HISTORICAL_DATA_FAILURE
} = actions

export default function* historicalDataWatcher() {
  yield takeLatest(GET_HISTORICAL_DATA_FOR_SYMBOL, historicalDataWorker)
}

function historicalDataFetcher(coin) {
  return fetch(
    `https://min-api.cryptocompare.com/data/histominute?tsym=USD&fsym=${coin}&api_key=7cd938d1d242099bbb0eb708a1374dfed42f074339a86e03c39d23041dcf4f87&limit=10`
  )
}

function* historicalDataWorker(action) {
  const { payload } = action

  try {
    const response = yield call(historicalDataFetcher, payload)
    const resolvedResponse = yield response.json()

    yield put({ type: HISTORICAL_DATA_SUCCESS, payload: resolvedResponse.Data })
  } catch (e) {
    yield put({ type: HISTORICAL_DATA_FAILURE, payload: e })
  }
}
