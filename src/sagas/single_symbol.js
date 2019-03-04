import { takeLatest, put, call } from 'redux-saga/effects'

import actions from 'actions'

const {
  GET_SINGLE_SYMBOL,
  SINGLE_SYMBOL_SUCCESS,
  SINGLE_SYMBOL_FAILURE
} = actions

export default function* singleSymbolWatcher() {
  yield takeLatest(GET_SINGLE_SYMBOL, singleSymbolWorker)
}

function singleSymbolFetcher() {
  return fetch(
    'https://min-api.cryptocompare.com/data/price?tsyms=USD&fsym=BTC&api_key=7cd938d1d242099bbb0eb708a1374dfed42f074339a86e03c39d23041dcf4f87'
  )
}

function* singleSymbolWorker() {
  try {
    const response = yield call(singleSymbolFetcher)
    const resolvedResponse = response.json()

    yield put({ type: SINGLE_SYMBOL_SUCCESS, payload: resolvedResponse })
  } catch (e) {
    yield put({ type: SINGLE_SYMBOL_FAILURE, payload: e })
  }
}
